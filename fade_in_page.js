/* Script to fade in page block by block By: Joel Bernerman*/

// add a behavior to drupal js handler.
Drupal.behaviors.fade_in_pageFadeout = function(context) {
  
  
  
  //Need to fix a bug. when a scrollbar is shown the total width is wrong and the fadeing is one pixel off.
/*  $(window).load(fixAlignment);
  $(window).resize(fixAlignment);

  function fixAlignment(){
    var obj = $("html");
    var doc_width = document.width + parseInt(obj.css("margin-left"));
    var margin_left = (doc_width % 2 == 1) ? '0px' : '-1px';
    obj.css("margin-left", margin_left);
  }
*/

  //Fade in once page is loaded.
  fade_in_page();
  // bind event click to the fade in function.
  $('.pager-link').click(fade_in_page);
  
  function fade_in_page() {
    // Get required positioning settings for our blocks to fill
    $fade_in_dom = $('.clear-block').find('.container-inner');
    total_width = $fade_in_dom.width() + 20;
    total_height = $fade_in_dom.height();
    left = $fade_in_dom.offset().left - 10;
    top_pos = $fade_in_dom.offset().top;
   
    // All position variables declared next to eachother to help configure any changes.
    // position variables for block 1
    b1_width = total_width/3;
    b1_height = 100;
    b1_left = left;
    b1_top = top_pos;

    // position variables for block 2
    b2_width = b1_width;
    b2_height = 300;
    b2_left = b1_left;
    b2_top = top_pos + b1_height;
  
    // position variables for block 3
    b3_width = 100;
    b3_height = total_height;
    b3_left = b1_left + b1_width;
    b3_top = top_pos;
  
    // position variables for block 4
    b4_width = total_width - b1_width - b3_width;
    b4_height = 80;
    b4_left = left + b1_width + b3_width;
    b4_top = top_pos;
  
    // position variables for block 5
    b5_width = total_width - b1_width - b3_width;
    b5_height = b4_height;
    b5_left = left + b1_width + b3_width;
    b5_top = top_pos + total_height -b5_height;
  
    // position variables for block 6
    b6_width = 300;
    b6_height = total_height -b5_height - b4_height;
    b6_left = left + b1_width + b3_width;
    b6_top = top_pos + b4_height;
  
    // position variables for block 7
    b7_width = total_width - (b1_width + b3_width + b6_width);
    b7_height = b6_height;
    b7_left = left + b1_width + b3_width + b6_width;
    b7_top = b6_top;
  
    // position variables for block 8
    b8_width = b1_width;
    b8_height = total_height - b2_height - b1_height;
    b8_left = left;
    b8_top = top_pos + b1_height + b2_height;
    $('.fade_block').hide();
    // Create each block and set css setting for all the blocks. 
    $fade_block1 = $("<div class='fade_block'></div>"); 
  
    $fade_block1
      .css('position', 'absolute')
      .css('top', b1_top)
      .css('left', b1_left)
      .css('width', b1_width)
      .css('height', b1_height)
      .css('z-index', 99)
      .css('background-color','#000000');
    $("body").append($fade_block1);

    $fade_block2 = $("<div class='fade_block'></div>"); 
  
    $fade_block2
      .css('position', 'absolute')
      .css('top', b2_top)
      .css('left', b2_left)
      .css('width', b2_width)
      .css('height', b2_height)
      .css('z-index', 99)
      .css('background-color','#000000');
    $("body").append($fade_block2);
   
    $fade_block3 = $("<div class='fade_block'></div>"); 

    $fade_block3
      .css('position', 'absolute')
      .css('top', b3_top)
      .css('left', b3_left)
      .css('width', b3_width)
      .css('height', b3_height)
      .css('z-index', 99)
      .css('background-color','#000000');
    $("body").append($fade_block3);
  
    $fade_block4 = $("<div class='fade_block'></div>"); 

    $fade_block4
      .css('position', 'absolute')
      .css('top', b4_top)
      .css('left', b4_left)
      .css('width', b4_width)
      .css('height', b4_height)
      .css('z-index', 99)
      .css('background-color','#000000');
    $("body").append($fade_block4);
  
    $fade_block5 = $("<div class='fade_block'></div>"); 
  
    $fade_block5
      .css('position', 'absolute')
      .css('top', b5_top)
      .css('left', b5_left)
      .css('width', b5_width)
      .css('height', b5_height)
      .css('z-index', 99)
      .css('background-color','#000000');
    $("body").append($fade_block5);
  
 
    $fade_block6 = $("<div class='fade_block'></div>"); 

  
    $fade_block6
      .css('position', 'absolute')
      .css('top', b6_top)
      .css('left', b6_left)
      .css('width', b6_width)
      .css('height', b6_height)
      .css('z-index', 99)
      .css('background-color','#000000');
    $("body").append($fade_block6);
  
    $fade_block7 = $("<div class='fade_block'></div>"); 
  
    $fade_block7
      .css('position', 'absolute')
      .css('top', b7_top)
      .css('left', b7_left)
      .css('width', b7_width)
      .css('height', b7_height)
      .css('z-index', 99)
      .css('background-color','#000000');
    $("body").append($fade_block7);
 
    $fade_block8 = $("<div class='fade_block'></div>"); 

    $fade_block8
      .css('position', 'absolute')
      .css('top', b8_top)
      .css('left', b8_left)
      .css('width', b8_width)
      .css('height', b8_height)
      .css('z-index', 99)
      .css('background-color','#000000');
    $("body").append($fade_block8);
 

  
    //Lastly perform the fadeing. callback to make them fade one by one and not at the same time. OBS the one slide animation.
    $fade_block1.pause(500).fadeOut('fast', function() {
      $fade_block6.fadeOut('normal', function() {
        $fade_block5.fadeOut('normal', function() {
          $fade_block7.fadeOut('normal', function() {
            $fade_block3.slideUp('fast', function() {
              $fade_block2.fadeOut('normal', function() {
                $fade_block4.fadeOut('normal', function() {
                  $fade_block8.fadeOut('normal');
                });
              });
            });
          });
        });
      });
    });
  }
}

$.fn.pause = function(duration) {
  $(this).animate({ dummy: 1 }, duration);
  return this;
};

