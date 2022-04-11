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

