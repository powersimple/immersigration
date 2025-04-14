<?php

get_header(); 
$section_class = get_post_meta($post->ID,'section_class',true);
$default_video_url = get_post_meta($post->ID,"featured_video_url",true);
$video_playlist = get_post_meta($post->ID,"video_playlist",true);

$section_menu = get_post_meta($post->ID,"section_menu",true);

?>

<script>
// Example event object
const event = {
    title: "The Polys 4th Annual WebXR Awards",
    description: "The Polys is THIS SUNDAY!\nJoin the XR Community for our Annual Celebration of the Immersive Web in our VR Watch Party in ENGAGE Hosted by MetaCities\nJoin Session ID BZL9O (that's a capital O)\n\nSunday, March 3, beginning at 5pm Eastern with Red Carpet interviews by Sophia Moshasha followed the Ceremony hosted by Julie Smithson, LIVE from Planet X Studios in Brooklyn, NY.",
    location: "On YouTube and ENGAGE",
    startTime: "20240303T220000Z",
    endTime: "20240304T003000Z"
};

createCalendarEvent(event);
</script>
<main role="main" class="main <?=$section_class?>">



<div class="d-flex container-flex">
  <div class="col-md-7 left">
  <div class="widget-container">


</div>
  <?php
   print do_blocks(do_shortcode($post->post_content));
    if(@$section_class == 'ceremony'){
      
      if(@$section_menu){
        
        require_once "functions/functions-awards.php";
       $awards = get_menu_array($section_menu);
        require_once('templates/awards.php');
     }
    }
  ?>


  </div>

<div class="col-md-5 right">
    <div class="sticky">
  

       

       
  <?php if($default_video_url != ''){
    require_once('templates/embed-video.php');
    }
   ?>
  </main>
  <?php get_footer(); ?>     