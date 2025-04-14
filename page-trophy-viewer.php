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
?>

   

<a-scene  renderer="antialias: true;
                   colorManagement: true;
                   sortObjects: true;
                   maxCanvasWidth: 5600;
                   maxCanvasHeight: 2750;"" gltf-model="dracoDecoderPath: assets/draco/;" grab-panels item-grab device-set nomination-link anti-drop
    device-orientation-permission-ui physics="iterations: 30;"
    inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
    loading-screen="backgroundColor: #12171a" renderer="colorManagement: true; foveationLevel: 0;maxCanvasWidth:5600;
                   maxCanvasHeight: 3200;"
    background="color: #000000">

    <a-assets timeout="80000">
        <!-- Loads assets -->
        <?php
            include "webxr/polys5/assets.php";
            include "webxr/polys5/mixins.php";
            
        ?>

    </a-assets>
    <a-sky src="#sky" animation="property: object3D.rotation.y; to: -360; easing: linear; dur: 1200000; loop: true;"></a-sky>

    <?php
            //include "webxr/polys5/credits-rigging.php";
            include "webxr/polys5/rigging.php";
          
    $showplatform="true";        
    if(@$_GET['showplatform']){
        $showplatform = "false";
     
    }

$z_start = 600;
if(@$_GET['z_start']){
  $z_start = $_GET['z_start'];
  $trophy_offset = $z_start+280;
 
}
$z_offset = 10;
if(@$_GET['z_offset']){
  $z_offset = $_GET['z_offset'];
  
}

?><!--
<a-entity id="trophy-wrap" class="clickable center-obj-zone" static-body="shape: box; mass: 2" position="0 -225 -400" >


    <a-entity id="trophy-model" class="center-obj-zone" static-body
                gltf-model="/assets/models/polys/4th/2023-Award200.glb" class="collision" visible="true"
                position="0 0 0" mixin="obj" rotation="0 90 0" scale="1 1 1" 
                animation="property: object3D.rotation.y; to: -360; easing: linear; dur: 24000; loop: true;"></a-entity>
        
        </a-entity>
       -->
       

       



<a-entity id="trophy-rotation" class="center-obj-zone" 
                visible="true"
                scale="1 1 1"
                position="0 -14.855 0"
                rotation="0 0 0" 
               >
<?php
  include "webxr/polys5/lights.php";
  //  animation="property: object3D.rotation.y; to: -360; easing: linear; dur:64000; loop: true;"
?>
        <a-entity id="trophy-model" class="center-obj-zone" 
                gltf-model="#trophy"  visible="true"
                scale="40 40 40"
                position="0 0 50"
                rotation="0 60 0" 
               
           > </a-entity>
           <a-light id="light-p5c-3" color="white" position="-2.79319 0.97826 2.92914" rotation="0.390 -45.03 0.42000000000000004" light="color: #ffc800; angle: 20; type: spot; intensity: 60.14; distance: 3.39" visible="">
</a-light>

    <!-- Left Angle Light (45 degrees) -->
    <a-light id="light-p5c-2" color="white" position="1.88137 1.75 3.51503" rotation="0 45 0" light="color: #ffc800; angle: 20; type: spot; intensity: 8; distance: 2.5">
    </a-light>

    <!-- Right Angle Light (-45 degrees) -->
    <a-light id="light-p5c-3" color="white" position="4.4343 0.29826 3.72449" rotation="0.67 45 0" light="color: #ffc800; angle: 20; type: spot; intensity: 60.14; distance: 3.39" visible="">
    </a-light>
        </a-entity>







</a-scene>
<script>
AFRAME.registerComponent('qz-keyboard-controls', {
  // ...

  getVelocityDelta: function () {
    var data = this.data,
        keys = this.getKeys();

    this.dVelocity.set(0, 0, 0);
    if (data.enabled) {
      if (keys.KeyW || keys.ArrowUp)    { this.dVelocity.z -= 1; }
      if (keys.KeyA || keys.ArrowLeft)  { this.dVelocity.x -= 1; }
      if (keys.KeyS || keys.ArrowDown)  { this.dVelocity.z += 1; }
      if (keys.KeyD || keys.ArrowRight) { this.dVelocity.x += 1; }

      // NEW STUFF HERE
      if (keys.KeyQ)  { this.dVelocity.y += 1; }
      if (keys.KeyZ) { this.dVelocity.y -= 1; }
    }

    return this.dVelocity.clone();
  },

  // ...
});
</script>
<?php
     get_footer();
?>`