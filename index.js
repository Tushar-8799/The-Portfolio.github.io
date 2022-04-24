var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags)
var interval;
for(var i=0; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        // console.log(5); 
        event.preventDefault();
        var targetSectionID = this.href.split('#')[1];
        // console.log(targetSectionID)
        var targetSection = document.getElementById(targetSectionID);
        interval = setInterval(function(){scrollVertically(targetSection, targetSectionID);},1);
    });
}

function scrollVertically(targetSection, targetSectionID){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 220 && targetSectionID=='contact'){
                clearInterval(interval);
                return;
            }
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 20);
}


var skillsAreInside = document.querySelectorAll('.inside');
var id = null;
let pos = 0;
console.log(skillsAreInside);
for (var i = 0; i < skillsAreInside.length; i++){ 
    clearInterval(id);
    id = setInterval(animate, 5);
    console.log(id);    
}
function animate(){
    if (pos == 100){
        clearInterval(id);
    }
    else{
        skillsAreInside.left = pos + 'px';
    }
}



{/* Skills */}

var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
