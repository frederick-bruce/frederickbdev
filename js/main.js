
// click function that shows scroll Y position
let screenWidth = window.outerWidth;
const page = document.querySelector("body");
page.addEventListener("click", ()=>{
  console.log(`Y scroll position is: ${window.scrollY}`);
  console.log(`screen width is: ${screenWidth}`);
});

// fade in content when scrolling work and about sections
    // larger screen
    if(screenWidth >= 1280){
        $("#project-1").animate({"opacity": "0"});
        $("#project-2").animate({"opacity": "0"});
        $("#project-3").animate({"opacity": "0"});
        $("#project-4").animate({"opacity": "0"});
        $("#project-5").animate({"opacity": "0"});
        $("#project-6").animate({"opacity": "0"});
        $("#project-7").animate({"opacity": "0"});
        $("#project-8").animate({"opacity": "0"});
        $("#about").animate({"opacity": "0"});
    
        // if scroll Y position greater than x, fade in
        window.addEventListener("scroll", () => {
        if(window.scrollY > 282){
            $("#project-1").animate({"opacity": "1"}, 1200);
            // turn opacity ot 0 first in css, then opacity to 1.0 here .
        }
        if(window.scrollY > 951){
            $("#project-2").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1545){
            $("#project-3").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2235){
            $("#project-4").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2850){
            $("#project-5").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 3400){
            $("#project-6").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 4100){
            $("#project-7").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 4750){
            $("#project-8").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 5200){
            $("#about").animate({"opacity": "1"}, 1200);
        }
        });
    }

    // laptop screens screens
    if(screenWidth >= 1024 && screenWidth < 1280){
        $("#project-1").animate({"opacity": "0"});
        $("#project-2").animate({"opacity": "0"});
        $("#project-3").animate({"opacity": "0"});
        $("#project-4").animate({"opacity": "0"});
        $("#project-5").animate({"opacity": "0"});
        $("#project-6").animate({"opacity": "0"});
        $("#project-7").animate({"opacity": "0"});
        $("#project-8").animate({"opacity": "0"});
        $("#about").animate({"opacity": "0"});
    
        // if scroll Y position greater than x, fade in
        window.addEventListener("scroll", () => {
        if(window.scrollY > 225){
            $("#project-1").animate({"opacity": "1"}, 1200);
            // turn opacity ot 0 first in css, then opacity to 1.0 here .
        }
        if(window.scrollY > 734){
            $("#project-2").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1217){
            $("#project-3").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1741){
            $("#project-4").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2280){
            $("#project-5").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2785){
            $("#project-6").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 3277){
            $("#project-7").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 3778){
            $("#project-8").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 4400){
            $("#about").animate({"opacity": "1"}, 1200);
        }
        });
    }

    // tablet screens
    if(screenWidth >= 768 && screenWidth < 1024){
        $("#project-1").animate({"opacity": "0"});
        $("#project-2").animate({"opacity": "0"});
        $("#project-3").animate({"opacity": "0"});
        $("#project-4").animate({"opacity": "0"});
        $("#project-5").animate({"opacity": "0"});
        $("#project-6").animate({"opacity": "0"});
        $("#project-7").animate({"opacity": "0"});
        $("#project-8").animate({"opacity": "0"});
        $("#about").animate({"opacity": "0"});
    
        // if scroll Y position greater than x, fade in
        window.addEventListener("scroll", () => {
        if(window.scrollY > 233){
            $("#project-1").animate({"opacity": "1"}, 1200);
            // turn opacity ot 0 first in css, then opacity to 1.0 here .
        }
        if(window.scrollY > 678){
            $("#project-2").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1200){
            $("#project-3").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1600){
            $("#project-4").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2000){
            $("#project-5").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2500){
            $("#project-6").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2900){
            $("#project-7").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 3350){
            $("#project-8").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 3800){
            $("#about").animate({"opacity": "1"}, 1200);
        }
        });
    }

    // mobile screens
    if(screenWidth >= 375 && screenWidth < 768){
        $("#project-1").animate({"opacity": "0"});
        $("#project-2").animate({"opacity": "0"});
        $("#project-3").animate({"opacity": "0"});
        $("#project-4").animate({"opacity": "0"});
        $("#project-5").animate({"opacity": "0"});
        $("#project-6").animate({"opacity": "0"});
        $("#project-7").animate({"opacity": "0"});
        $("#project-8").animate({"opacity": "0"});
        $("#about").animate({"opacity": "0"});
    
        // if scroll Y position greater than x, fade in
        window.addEventListener("scroll", () => {
        if(window.scrollY > 191){
            $("#project-1").animate({"opacity": "1"}, 1200);
            // turn opacity ot 0 first in css, then opacity to 1.0 here .
        }
        if(window.scrollY > 707){
            $("#project-2").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1254){
            $("#project-3").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1743){
            $("#project-4").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2271){
            $("#project-5").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2707){
            $("#project-6").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 3343){
            $("#project-7").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 3843){
            $("#project-8").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 4543){
            $("#about").animate({"opacity": "1"}, 1200);
        }
        });
    }