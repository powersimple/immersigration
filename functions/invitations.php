


<?Php








/*

//AWRARDS LOOP


foreach($ros as $i =>$item){ // outer loop.
    extract($item);
    if(!in_array("nomination",explode(" ",$classes[0]))){
       // continue;
      }
    print "<h3>".showCounter($counter)." | $title</h3>";
   // print "<strong>$slug</strong>";
    $current_award = $slug;
    $awards_list[$current_award] = $item['title'];
/*
print "<ol>";
    foreach($nominees as $c => $nominee){
       $current_nomination = $nominee['slug'];
      
       $id = $nominee['post']->ID;
       $type=$nominee['post']->post_type;
      


       if($type == 'profile'|| $type == 'resource'){
    }
        if(!in_array($current_nomination,$nominations)){
            $nominations[$current_nomination] = ["nominations"=>[],"nominee"=>[
                "name"=>$nominee['title'],
                "email"=>@$nominee['meta']['email'][0],
                "website"=>@$nominee['meta']['website'][0],
                "resource_url"=>@$nominee['meta']['resource_url'][0],
                "_thumbnail_id"=>@$nominee['meta']['_thumbnail_id'][0],
                
                
            ]];
            
         }

        array_push($nominations[$current_nomination]['nominations'],$current_award . " ". $current_nomination);

      

      
       print "<li><a href='/wp-admin/post.php?post=$id&action=edit' target='_blank'>$nominee[title]</a>";
    //    print " | ". $type. " | ";

        getMetaLink($nominee['meta'],'email');

        getMetaLink($nominee['meta'],'twitter');
        getMetaLink($nominee['meta'],'website');
        getMetaLink($nominee['meta'],'resource_url');
        
        print "</li>";


       $nominations = getNominee(@$nominee,$nominations,$current_award,$current_nomination);

 
   
    }
print "</ol>";



$counter++;


}


aggregateNominations($nominations);

function aggregateNominations($nominations){


    foreach($nominations as $n => $nominee){
        print $name= $nominee['nominee']['name'];
     print $email= $nominee['nominee']['email'];
        print"<BR>";
        $subject = "Poly Award Nomination";
        if(count($nominee['nominations'])>1){
            $subject = "Poly Award Nominations";
        }
        $body="test";
    
        foreach($nominee['nominations'] as $nom => $award){
         //  print $award;
            print @$awards_list[$award];
            
            print"<BR>";
    
    
        }
    
    
    
    
        if($email != ''){
        print "SUBJECT= $subject<BR>";
        print "<a href='mailto:$email?subject=$subject&body=$body'>EMAIL</a>";
            // print @var_dump($nominee);
        }
    
        print "<BR><BR>";
    }

}









*/

 // located in functions-navigation.php






$invitation_statuses = [
    "team"=>[],
    "no-status"=>[],
    "needs-invite"=>[],
    "invited"=>[],
    "agreed"=>[],
    "registered-no-release"=>[],
    "registered"=>[],
    "calendar-sent"=>[],
    "calendar-sent-no-release"=>[],
    "calendar-sent-no-registration"=>[],
    
    "confirmed-no-registration"=>[],
    "confirmed-no-release"=>[],


    "prerecord"=>[],
    
    "complete"=>[]

];



if(@$_GET['calendar']){
    print "<a href='?'>Invite mode</a>";
} 
 else if (@$_GET['follow-up']) {
    print "<a href='?follow-up=1'>Followup mode</a>";
} else {
    print "<a href='?calendar=1'>Calendar mode</a>";
}
print "<hr><BR>";



?>





<?php




$offset = -4;
if(@$_GET['offset']){
    $offset = $_GET['offset'];
}




//EVENT LEVEL
foreach($ros as $i =>$item){ // this is the top level of the event itself
    //AWARD
   if($i==0){
       $code = "A";
    } else if($i==1){
        $code = "C";
    }
    $event_title = $item['post']->post_title;
   $link = get_permalink($item['post']->post_title);
    $session_type = @$item['event_type'][0];
   $green_room_url = @$item['meta']['green_room_url'][0];
   $release_form_url = @$item['meta']['release_form_url'][0];
 



   $start = intval(@$item['meta']['utc_start'][0]);
  // $start = $start-(($offset*3600)*-1);// corrects timezone to minue hours
       
   
   
    $sessions = $item['children'];
    $speaker_status = [];
    $holds = [];
    $session_counter = 0;



// HEADING OR EACH OUTER LOOP
    print "<h1><hr>$event_title</h1>";
    print "START TIME: " .date("Y-M-D H:i",$start)."<BR>";


    //SESSION LEVEL
   foreach($sessions as $s => $session){ // THIS IS THE EVENT SESSION LOOP


 $display_session_counter = $session_counter;
    if($session_counter<10){{
        $display_session_counter = "0".$session_counter;
    }}
    $duration = @$session['meta']['duration'][0]." Minutes";
    $duration = @$session['meta']['event_length_seconds'][0]." seconds";
    


//    var_dump($session);
    $session_type = @$session['event_type'];
    if($session_type ==  ''){
        PRINT $session_type = "<STRONG>SESSION TYPE NOT SET</STRONG>";                
      }

  // var_dump($session); 
        $session_script = '';
       
       
        $speaker_status[$session['post']->ID] = [
            "session_time"=> date("H:i",$start),
                
            "session"=> @$session['post']->post_title,
            "speakers"=> [],
                
        ];
       
        

        

        $session_id = $session['post']->ID;
        $session_slug=sanitize_title($session['post']->post_title);
        $session_blurb= do_blocks($session['post']->post_content);
        $green_room_time = $start - (15*60);
        if(@$_GET['invites']){
        print "<h3>".$session['post']->post_title;
        print "</h3>";
        
        print "GREEN ROOM TIME: ".date("H:i",$green_room_time)."<BR>";
        print "START TIME: " .date("H:i",$start);
        print "$duration<BR>";
    }
 $duration = $session['event_length_seconds'];
 
 if(!intval($duration)){
    $duration = 0;
 }
$minutes = floor(intval($duration) / 60); // Get whole minutes
$seconds = $duration % 60; // Get remaining seconds

$session_type = ucwords(str_replace('-', ' ', strtolower($session_type)));
//print "<span class='session-name'>".$session['post']->post_title."</span>"."<BR>";

if($duration>0){
    if($duration != ''){
       @$end+=intval(trim($duration));
      }
      $end = $start + ($duration);
}
if(@$_GET['list']){
    print "$code"."$display_session_counter";
    print "|".date("h:ia",$start);
    echo "|$minutes|";
    
    print "$session[title]";
    
    echo "|$session_type";

    print "<br>";

// THIS  IS THE SESSION LOOP WITH DETAILS - functions-events.php
   
} else{

    print "<h3>$code"."$display_session_counter <a href='/wp-admin/post.php?action=edit&post=$session_id' target='_blank'> $session[title]</a></h3>";
    echo "Length: $minutes minute";
    if($minutes>1){
        echo "s ";
    } else {
        print " ";
    }
    if($seconds){
        echo " $seconds seconds";
    }
    echo "<br>Type: ".ucfirst($session_type)." ";

    print "Start: ".date("h:ia",$start)." ";
    

    echo "- ".date("h:ia",$end)." ";
   
  



    if($session['post']->post_title == 'Break'){
      //  continue;
    }
    ros_items($session);
    print"<hr>";
}
 
 $start=@$end;

 /*if($duration>0){
        if($duration != ''){
           $start+=intval(trim($duration));
          }
    }*/
 if(@$session['meta']['event_script_url'][0] != ''){
    $event_script_url = $session['meta']['event_script_url'][0];
    print "<a href='$event_script_url' target='_blank'>Script</a><br>";
 }              
           if(@$session['meta']['event_reel_url'][0] != ''){
                    $event_reel_url = $session['meta']['event_reel_url'][0];
                    print "<a href='$event_reel_url' target='_blank'>Reel</a><br>";
                }
        $speaker_emails = [];
        
        $moderator = '';
        $moderator_email = '';
        $with = '';
     
        // var_dump($session);
        
        //*speakerS
       

        //SPEAKER LEVEL
        $session_counter++;
    }
       print "<hr>";
       if(@$_GET['moderators']==1){

       print '<BR>ALL Emails:<BR><textarea cols="80" rows="2">'.implode(",",$speaker_emails).'</textarea><BR>';
       }



       $start = $start + (@$session['meta']['duration'][0]*60);
     
     
  
   
    
}

foreach($invitation_statuses as $is => $invitation_status){
    print "<span class='$is'>".strtoupper(str_replace("_","",$is)).'</span><br><ol class="$is">';
            foreach($invitation_status as $key=>$status){
                extract($status);
                extract($speaker_info);
                
                print "<li class='$is'>$session_name | <a target='_new' href='/wp-admin/post.php?action=edit&post=$id'><span class='$is'>".$speaker."</span></a> $guest_type";
                if($email !=""){
                    print " | <a class='email' href='mailto:$email'>$email</a>";
                } else {
                    print "NO EMAIL";
                }
                if($linkedin !=""){
                    print " | <a href='$linkedin' target='_blank'><i class='fa fa-linkedin'></i></a>";
                }
                if($email !=""){
                    print " | <a href='$twitter' target='_blank'><i class='fa fa-twitter'></i></a>";
                }
            //    print "<span class='status-notes'>";
                if($point_of_contact !=""){
                    print " | $point_of_contact";
                }
                
                if($notes!=""){
                    print " | $notes";
                }
                print "</span></li>";

            }
            print '</ol><hr>';

        }









//var_dump($invitation_statuses);
$_REQUEST['status'] = [
    'calendar_sent'=>[],
    'calendar_confirmed'=>[],
    'signed_release'=>[],
    
];


?>


<legend class="invite-legend">
    <strong style="color:#fff">LEGEND - INVITATION COLOR CODES</strong>
    <li class="no-status">NO STATUS</li>
    <li class="team">Team</li>
    <li class="needs-invite">Needs Invitation</li>
    <li class="invited">Invited</li>
    <li class="agreed">Agreed</li>
    <li class="registered-no-release">Registered (release not signed)</li>
    <li class="registered">Registered</li>
    <li class="calendar-sent">Calendar Sent</li>
    <li class="calendar-sent-no-registration">Calendar Sent (no Registration)</li>
    <li class="calendar-sent-no-release">Calendar Sent (no Release Signed)</li>
    <li class="confirmed-no-registration">Calendar Confirmed (no Registration)</li>
    <li class="confirmed-no-release">Calendar Confirmed (no Release Signed)</li>
    <li class="prerecord">Session Prerecorded</li>    
    <li class="complete">Registration Confirmed and Complete</li>

</legend>
