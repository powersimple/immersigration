<?php
function url(){
  return sprintf(
    "%s://%s%s",
    isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
    $_SERVER['SERVER_NAME'],
    $_SERVER['REQUEST_URI']
  );
}
get_header(); 
$section_class = get_post_meta($post->ID,'section_class',true);
print $default_video_url = get_post_meta($post->ID,"embed_video_url",true);

if($hero=get_post_meta($post->ID,'hero',true)){
   $hero_image = getThumbnail($hero);
   /*
if($post->post_parent==0){

    print "<div id='section-heading'>";
    $parent_post = get_post($post->post_parent);
    $parent_post_title = $parent_post->post_title;
    echo $parent_post_title;
    print "</div>";
}
*/
?>


<?php



}

?>

<div class="title-bar">
    <h1 class="title"><?=$post->post_title?></h1>
    <?php
    if(@$post->post_excerpt){
    ?>
    <h2 class="featuring">
        <?=$post->post_excerpt?></h1>
    
    <?php
    }
 
    ?>
</div>
  </div>

<main  role="main" class="main <?=$section_class?>">

  <section class="module" id="<?php echo @$slug?>" role="region">
<div class="row">
<div class="container">
 
  <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-offset-1 col-10 ">

  <?php 
   
  $vrc = 'virtual-red-carpet-5';
  $ceremony = 'polys5';

    if(@$_GET['vrc']){
      $vrc = $_GET['vrc'];
    }
    if(@$_GET['ceremony']){
      $ceremony = $_GET['ceremony'];
    }

   print "<hr><div>";

    $vrc = get_menu_array($vrc);
    $ceremony = get_menu_array($ceremony);
    $awards = array_merge($vrc,$ceremony);

    $results = [];
    $results['people'] = [];
    $offset = -5;
    if(@$_GET['offset']){
        $offset = $_GET['offset'];
    }
print "<table class='ros-table'>";
   foreach($awards as $key => $award){// outer menu loop
    $counter=0;
    $start = intval($award['meta']['utc_start'][0]);
    $start = $start-(($offset*3600)*-1);// corrects timezone to minute hours

      print "<tr><td class='$award[slug]'>";// single cell table 100%;
        print "<table class='event-table'><tr>"; 
        print "<td>";
        print $award['title'];
        print "</td>";
        print "<td>";
        print date("g:i a",$start);
        print "</td></tr></table>";
      print "</td></tr>";

      print "<tr><td class='$award[slug]'><table class='ros-sessions'>"; 

      
    
      $event = [
        "name"=>$award['title'],
        "slug"=>$award['post']->slug
      ];
     
    //  getRunOfShowAccordion($awards);

   
       $results = rosListings($award['children'],$results,$event,$start,$counter);
      
    //  print $award['post']->ID;
    // print $award['meta']['utc_start'][0];
    
       print "</table></td></tr>";
   }
   print "</table>";
//   var_dump($results);
//print("<pre>".print_r($results,true)."</pre>");
   print "</div>";


//var_dump($awards);
nomineeAccordion($ceremony);
print "<BR><HR><BR>";


  print do_blocks(do_shortcode($post->post_content));
?>
</div>
</section>
</div>

</div>
  </main>
  <?php get_footer(); ?>