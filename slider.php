<?
	$prod.="<div class='catalog-item-image' itemscope itemtype=\"http://schema.org/Product\">";
	$prod.="<div class='preview av_0 photo_block'>";
// ==== Блок с фотками ==== //
// 1 фотка
if (empty($goods[0]['photo1']) && empty($goods[0]['photo2'])) {
	
	$foto="0";
	$prod.="<div class='av_6 single images' >
	<a style='cursor:default'><img alt=\"".$goods[0]['name']."\" class=\"hover\" src=\"/images/".(!empty($goods[0]['photo'])?$goods[0]['photo']:'no_image.gif')."\" width=\"363\" itemprop=\"image\" /></a></div> ";

// много фоток
} else {
	
	$foto="1";

    $photos = [];
    $i = 1;
    while(!empty($goods[0]['photo'.$i])){
        $photo[]=$goods[0]['photo'.$i];
        $i++;
    }

    if(count($photo)>0){
        $prod .= makePhotoSlider($photos, $goods[0]['name']);
        $prod .= makeModalSlider($photos, $goods[0]['name']);
    }
    $prod.='<script type="module">
        window.addEventListener("load", () => {
        initSlider("#innerSlider");
        initSlider("#modalSlider");
        });
    </script>';
}
// ==== Конец ==== //

	//Иконки
	if (isset($_GET['sku'])){
		$prod.=MakeParametersIcon($sku_page_parameters,$foto)."";
	} else {
		$prod.=MakeParametersIcon($goods[0]['parameters'],$foto)."";
	}
			
	//Лого
	$prod.=MakeDealerLogo($goods[0]['parameters']);

	if ($goods[0]['id']=="11412") {
		$prod.="<div  class='availability preview' style=\"color:#000;padding-top:5px;border:0px solid #d5d6d7;text-align:center !important;\"><p style=\"text-align:center !important;\"><strong>Драйвер и обработка для «1С:Предприятия» в комплекте</strong></p><img src=\"/img/1c_logo.jpg\" width=200></div>";
	}


	$prod.="</div>";


?>

<?
function makePhotoSlider($photos, $name){
    $result = '';
    if(count($photos)>0){
            $result.='
        <div class="photoSlider" id="innerSlider">
        <div class="loupe photoSlider_mainPhotoWrapper" data-modal-opener>
            <img
            class="photoSlider__mainPhoto"
            alt="Главное изображение '.$name.'"
            class=""
            src="'.$photos[0].'"
            width="363"
            itemprop="image"
            />
        </div>
        <div class="photoSlider__line">
            <div class="photoSlider__iconsWrapper prevBtn">
            <svg width="24" height="24" class="photoSlider__icons">
                <use href="/slider/assets/sprites.svg#next" />
            </svg>
            </div>
            <div class="photoSlider__slider">
            <div class="photoSlider__thumbnailWrapper">';
            
            foreach ($photos as $photo) {
                $result.='<img
                        alt="'.$name.'"
                        src="'.$photo.'"
                        width="70px"
                        height="70px"
                        class="photoSlider__thumbnail photoSlider_active"
                        data-image="'.$photo.'"
                    />
                </div>';
            }

            $result.='</div>
            <div class="photoSlider__iconsWrapper nextBtn">
            <svg width="24" height="24" class="photoSlider__icons">
                <use href="/slider/assets/sprites.svg#next" />
            </svg>
            </div>
        </div>
        </div>';
    }
    return $result;
}

function makeModalSlider($photos, $name){
    $result = '';
    if(count($photos)>0){
        $result.='
        <div class="modalSlider" id="modalSlider">
      <svg
        id="closeModalBtn"
        fill="#000000"
        class="modalSlider__closeButton"
        height="20"
        width="20"
      >
        <use href="/slider/assets/sprites.svg#close2" />
      </svg>

      <div class="modalSlider__container">
        <div class="modalSlider__prevBtn prevBtn">
          <svg width="20px" height="20px" viewBox="0 0 24 24">
            <use href="/slider/assets/sprites.svg#next" />
          </svg>
        </div>
        <div class="modalSlider__wrapper">
          <div class="photoSlider modalSlider_innerWidth">
            <img
              class="photoSlider__mainPhoto"
              alt="'.$name.'"
              class=""
              src="'.$photos[0].'"
              style="border-bottom: 0px"
              itemprop="image"
            />
            <div class="photoSlider__line">
              <div class="photoSlider__slider">
                <div class="photoSlider__thumbnailWrapper">';
                $flag=true;
                foreach ($photos as $photo) {
                    $result.=' <img
                        alt="'.$name.'"
                        src="'.$photo.'"
                        width="70px"
                        height="70px"
                        class="photoSlider__thumbnail '. $flag? 'photoSlider_active' : '' .'"
                        data-image="'.$photo.'"
                    />';
                    $flag = false;
                }
                  $result.=' </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modalSlider__nextBtn nextBtn">
          <svg width="20px" height="20px" viewBox="0 0 24 24">
            <use href="/slider/assets/sprites.svg#next" />
          </svg>
        </div>
      </div>
    </div>
        ';
    }
    return $result;
}
?>

<?

function MakeParametersIcon($data,$foto) {
	
	$ico.='<div style="padding-top: 10px" class="techs">';

	$list = explode(',', $data);
	
	if (!empty($data)){

	foreach ($list as $key => $value) {
		
		if (!empty($value)){
			$val[]=' b.id="'.$value.'" AND b.ico_file LIKE "ico_%"';
		}
	}
	
	$xxx.=' WHERE '.implode(' OR ', $val).' ';
	
	$good=DbQueryToArray ('SELECT b.ico_name, b.ico_file FROM `tsd_charact_sku` b '.$xxx.' ORDER BY b.name');							
	
		
	foreach ($good as $row){
		 
		if(!empty($row['ico_file'])) {
			
			$ico.='<span class="tooltip" data-tooltip="'.$row['ico_name'].'"><img src="/images/'.$row['ico_file'].'" height="41" alt="'.$row['ico_name'].'"></span>';
			
		}
	}
	}
	
	$ico.='</div>';

	return $ico;
}
?>