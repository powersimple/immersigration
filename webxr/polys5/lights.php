<a-entity id="lighting" visible="true" static-body position="0 0 10" rotation="0 0 0">
    
    <!-- Primary Bright White Spotlights (Static, No Shadows, No Animation) -->
    <a-light id="spot-main-1" type="spot" color="white" intensity="30" position="0 120 0" rotation="-90 0 0"
             light="angle: 55"></a-light>
             <a-light id="spot-main-2" type="spot" color="white" intensity="28" position="2.08501 76.68219 71.51311" rotation="-20.373806237056943 0 -3.390191273789081" light="angle: 50" visible=""></a-light>
          <!--     <a-light id="spot-main-3" type="spot" color="white" intensity="28" position="-8.92509 11.37721 101.93818" rotation="" light="intensity: 15; angle: 50" visible=""></a-light>

   Directional Fill Lights (Scaled Up, Lower Intensity) -->
    <a-light id="directional-front" type="directional" color="white" intensity="1.8" position="300 150 300"></a-light>
    <a-light id="directional-back" type="directional" color="white" intensity="1.8" position="-300 150 -300"></a-light>

    <!-- Ambient Fill Light -->
    <a-light id="ambient" type="ambient" color="white" intensity="0.5"></a-light>
    <a-light id="logo-highlight" type="spot" color="white" intensity="24" position="0 55 10" rotation="-60 0 0"
         light="angle: 80; penumbra: 0.8; castShadow: false"></a-light>

    <!-- Animated Colored Lights -->
    <a-entity animation="property: object3D.rotation.y; to: 360; easing: linear; dur: 12000; loop: true;">

        <!-- Corner Accent Lights (Color Cycling) -->
        <a-light id="red-corner" type="point" color="#990000" intensity="5" position="100 60 100"
                 animation="property: light.color; from: #990000; to: #ff4500; dur: 4000; loop: true; dir: alternate"></a-light>
        <a-light id="blue-corner" type="point" color="#000099" intensity="5" position="-100 60 100"
                 animation="property: light.color; from: #000099; to: #0080ff; dur: 4000; loop: true; dir: alternate"></a-light>
        <a-light id="purple-corner" type="point" color="#800080" intensity="5" position="100 60 -100"
                 animation="property: light.color; from: #800080; to: #ff00ff; dur: 4000; loop: true; dir: alternate"></a-light>

        <!-- Side Spotlights (Color Cycling & Rotation) -->
        <a-light id="side-light-1" type="spot" color="purple" intensity="22" position="120 20 0" rotation="0 -90 0"
                 light="angle: 40"
                 animation="property: light.color; from: #800080; to: #ff00ff; dur: 4000; loop: true; dir: alternate"></a-light>
        <a-light id="side-light-2" type="spot" color="blue" intensity="22" position="-120 20 0" rotation="0 90 0"
                 light="angle: 40"
                 animation="property: light.color; from: #000099; to: #0080ff; dur: 4000; loop: true; dir: alternate"></a-light>
        <a-light id="side-light-3" type="spot" color="orange" intensity="22" position="0 20 120" rotation="0 180 0"
                 light="angle: 40"
                 animation="property: light.color; from: #ff4500; to: #ff9900; dur: 4000; loop: true; dir: alternate"></a-light>
        <a-light id="side-light-4" type="spot" color="red" intensity="22" position="0 20 -120" rotation="0 0 0"
                 light="angle: 40"
                 animation="property: light.color; from: #990000; to: #ff0000; dur: 4000; loop: true; dir: alternate"></a-light>

    </a-entity>

</a-entity>


  <!--

	
<a-light id="white-d1" type="directional" color="white" intensity=".1" position="120 0 0" rotation="0 0 0" angle="90"></a-light>

 <a-light id="white-d2" type="directional" color="white" intensity=".1" position="-120 0 60" rotation="0 0 0" angle="90"></a-light>


<a-light id="white-d3" type="directional" color="white" intensity=".1" position="0 0 -120" rotation="0 0 0" angle="90"></a-light>	
<a-light id="white-d4" type="directional" color="white" intensity=".1" position="0 0 60" rotation="0 0 0" angle="90"></a-light>

<a-light id="white-d5" type="directional" color="white" intensity=".1" position="-60 0 60" rotation="0 0 0" angle="90"></a-light>


<a-light id="white-d6" type="directional" color="white" intensity=".1" position="60 0 -60" rotation="0 0 0" angle="90"></a-light>	

<a-light id="white-d7" type="directional" color="white" intensity=".1" position="60 42 60" rotation="0 0 0" angle="90"></a-light>

<a-light id="white-d8" type="directional" color="white" intensity=".1" position="0 0 -60" rotation="0 0 0" angle="90"></a-light>


<a-light id="white-d9" type="directional" color="white" intensity=".1" position="-60 0 -60" rotation="" angle="90" light=""></a-light>
</a-entity>

-->	


<!--


<a-light id="white-d4" type="point" color="white" intensity="3" angle="50" position="16 -20 70" rotation="14 -13 -15" angle="90"></a-light>




<a-light id="white-d5" type="point" color="white" intensity="1" position="9.5 -31 5.2" rotation="-90 90 0" angle="90"></a-light>



<a-light id="white-d6" type="directional" color="purple" intensity="5" position="0 10 50" rotation="0 180 0" angle="90"></a-light>

 


<a-light id="red-d7" type="point" color="red" intensity="5" position="-50 10 0" rotation="90 -90 0" angle="90"></a-light>


<a-light id="yellow-d8" type="spot" color="yellow" intensity="30" position="-7 3 8" rotation="76.5 -35 -0" angle="80"></a-light>

<a-light id="white-d8" type="spot" color="white" intensity="30" position="12 0.520 15" rotation="80 -9 0" angle="80"></a-light>

<a-light id="blue-d9" type="spot" color="blue" intensity="0 " angle="180" position="50 10 -50" rotation="0 0 0" angle="90"></a-light>-->



