
$(document).ready(function(){

          // Intro animations - esta muy importante!

          $('.page-hdr').delay(1200).queue(function(){$(this).addClass('cubic')});
          $('.input, form').delay(1400).queue(function(){$(this).addClass('cubic')});

          // Fade bg + nav (not using css3 delay for a few reasons, don't hate me)

          $('#background-stretch, #background-stretch-bri').addClass('opaque'); 
          $('#overhead-nav-wrap').delay(1000).queue(function(){$(this).addClass('opaque')});  
          $('#nav').delay(0).queue(function(){$(this).addClass('opaque-left')}); 

          // Fade vids

          $('.video, .cta-add').delay(1000).queue(function(){$(this).addClass('opaque-vids')});    

          // Upload video

           $('.cta-add, .overlay').on('click', function(e) {
              $('.add-modal').toggleClass("show-modal"); 
              $('.cta-add').toggleClass("cta-close");
              $('#wrap, .video').toggleClass("blur"); 
              $('.uploader-wrap').delay(300).queue(function(){$(this).toggleClass('opaque')});
              e.preventDefault();
            });

           // Following interactioms

          $(function(){
           $(".follow").click(function () {
            $(this).toggleClass("following"); 
              $(this).text(function(i, text){
                  return text === "follow" ? "unfollow" : "follow";
              })
           });
        })

         
    });