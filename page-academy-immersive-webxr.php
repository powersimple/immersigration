<?php
    get_header();
    require_once "functions/functions-awards.php";
      $pedestals = get_pedestals('polys5');
    //    var_dump($pedestals);
      $assets = [];
     

   if(@$_GET['dump'] == 'awards'){
     
?>

<div id="dump" style="position:absolute;top:0px; height:100vh;width:20%;background-color:rgba(10,10,10,0.4);color:#fff;z-index:100;overflow-y:scroll;">
    <?php 
    

    
    
    
    ?>
   </div>
<?php
}
 //  include "webxr/polys5/drawer-experiences.php";
 //   include "webxr/polys2/drawer-nominations.php";
?>

   

<a-scene grab-panels item-grab device-set nomination-link anti-drop device-orientation-permission-ui physics="iterations: 30" renderer="antialias: true;
                   colorManagement: true;
                   sortObjects: true;
                   maxCanvasWidth: 8000;
                   maxCanvasHeight: 1800;"" gltf-model="dracoDecoderPath: assets/draco/;" 
    device-orientation-permission-ui physics="iterations: 30;"
    inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
    loading-screen="backgroundColor: #12171a" renderer="colorManagement: true; foveationLevel: 0;maxCanvasWidth:5600;
                   maxCanvasHeight: 3200;"
    background="color: #000000">

    <a-assets timeout="80000"> <a-entity tracked-controls="controller: 0; idPrefix: OpenVR"></a-entity>
    <a-entity tracked-controls="controller: 1; idPrefix: OpenVR"></a-entity>
        <!-- Loads assets -->
        <?php
            include "webxr/polys5/assets.php";
            include "webxr/polys5/mixins.php";
            
        ?>

    </a-assets>
    <a-sky src="#sky" animation="property: object3D.rotation.y; to: -360; easing: linear; dur: 1200000; loop: true;"></a-sky>

    <?php
            include "webxr/polys5/rigging.php";
           
    $showplatform="true";        
    if(@$_GET['showplatform']){
        $showplatform = "false";
     
    }


?>
<a-entity id="golden-gizmo-wrapper" position="-2 -7 -3" rotation="0 45 0" scale="6 6 6" visible="true">
       <a-entity id="golden-gizmo-ring-x" class="center-obj-zone" static-body
                gltf-model="#golden-gizmo-ring" class="collision" visible="true"
                scale="25 25 25"
                rotation="0 15 0"
                position="0 0 0" static-body="shape: box;" 
                animation="property: object3D.rotation.y; to: -360; easing: linear; dur: 24000; loop: true;"

                ></a-entity>

               
                <a-entity id="golden-gizmo-ring-y" class="center-obj-zone" static-body
                gltf-model="#golden-gizmo-ring" class="collision" visible="true"
                scale="25 25 25"
                rotation="0 90 90"
                position="0 0 0" static-body="shape: box;" 
                animation="property: object3D.rotation.x; to: 360; easing: linear; dur: 24000; loop: true;"

                ></a-entity>
             
            
                <a-entity id="golden-gizmo-ring-z" class="center-obj-zone" static-body
                gltf-model="#golden-gizmo-ring" class="collision" visible="true"
                scale="25 25 25"
                rotation="0 0 90"
                position="0 0 0" static-body="shape: box;" 
                animation="property: object3D.rotation.x; to: 360; easing: linear; dur: 24000; loop: true;"

                ></a-entity>
</a-entity><!-- golden gizmo ring -->
  


<a-entity id="awards-2022" position="-1.264 -8 -6.661" rotation="0 0 0" scale="1 1 1" visible="true">
    <a-entity id="platform-wrap"  scale="2 2 2" position="0 0 0" rotation="0 25 0" visible="<?=$showplatform?>">
      


         

<!--


               
                <a-entity id="nav" class="center-obj-zone" static-body
                scale=".6 .6 .6 "
                position="0.124 .8 3.97"
                material="shader: standard; metalness: 0.8;" 
                gltf-model="#ring" class="collision" visible="true"></a-entity>-->
                </a-entity><!-- platform
                  animation="property: object3D.rotation.y; to: -360; easing: linear; dur: 24000; loop: true;"  
                -->
    <a-entity id="pedestals" position="0 4.2 0" rotation="0 0 0" >
    
  <?php
      include "webxr/polys5/pedestals.php";
        if($showplatform == "true"){
          
        }

        ?>
        </a-entity><!-- pedestals  -->
        <?php
             include "webxr/polys5/lights.php"; 
             if($showplatform == "true"){
            ?>
        <a-entity id="trophy-rotation" class="center-obj-zone" 
                visible="true"
                scale="1 1 1"
                position="0 -43.5 -29"
                rotation="0 0 0" 
              
               >

                
          
                       
                     
                    
                <?php
             }
                ?>

         
</a-entity>

            <a-entity id="polys5-logo-model" class="center-obj-zone" static-body
                        gltf-model="#AcademyLogo"  visible="true"
                        scale="8 8 8" position="0 36 0" rotation="0 0
                         0"
                        ></a-entity>
   
  

                        <a-entity id="ring-wrapper" class="center-obj-zone" static-body
                visible="true"
                scale="1 1 1"
                position="0 0 0"
                static-body="shape: box;" 
                >
    <a-entity id="ring1" class="center-obj-zone" static-body
                gltf-model="#ring" class="collision" visible="true"
                scale="4 4 4"
                position="-26 0 0"
                static-body="shape: box;" 
                ></a-entity>

                <a-entity id="ring2" class="center-obj-zone" static-body
                gltf-model="#ring"  visible="true"
                scale="4 4 4"
                position="0 0 -26"
                static-body="shape: box;" 
                >  </a-entity>
                
                <a-entity id="ring3" class="center-obj-zone" static-body
                gltf-model="#ring" class="collision" visible="true"
                scale="4 4 4"
                position="0 0 26"
                static-body="shape: box;" 
                >  </a-entity>
                
                <a-entity id="ring4" class="center-obj-zone" static-body
                gltf-model="#ring" class="collision" visible="true"
                scale="4 4 4"
                position="26 0 0"
                static-body="shape: box;" 
                >  </a-entity>

                <a-entity id="ring5" class="center-obj-zone" static-body
                gltf-model="#ring" class="collision" visible="true"
                scale="4 4 4"
                position="0 2 0"
                static-body="shape: box;" 
                >  </a-entity>
                </a-entity>
                </a-entity><!-- awards 2022-->

          
        <a-entity id="trophy-rotation" class="center-obj-zone" 
                visible="true"
                scale="1 1 1"
                position="-0.77 -3.88154 -6.23"
                rotation="0 0 0" 
                animation="property: object3D.rotation.y; to: -360; easing: linear; dur: 24000; loop: true;">

        <a-entity id="trophy-model" class="center-obj-zone" 
                gltf-model="#trophy"  visible="true"
                scale="10 10 10"
                position="0 0 0"
                rotation="0 0 0" 
           >

        </a-entity>
                
       
        
  



    </a-entity>
</a-entity>
       
        <?php
             
             if(@$_GET['showtrophy'] == "true"){
           
             }
                ?>

            </a-entity>
















</a-scene>
<main role="main" class="main <?=$section_class?>">


  </main>
<?php
     get_footer();
?>`