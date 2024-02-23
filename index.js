var drumbtns = document.querySelectorAll(".drum").length;
for(var i = 0;i<drumbtns ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , handleclick);
}
function handleclick(){
    var buttonhtml =  this.innerHTML;
    makeSound(buttonhtml);   
    buttonAnimation(buttonhtml);
}
//above code is detecting button clicks through mouse
//below code is detecting button clicks through keyboard
document.addEventListener("keydown"  , function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
          case "w" :
            var w =  new Audio("sounds/crash.mp3");
            w.play();
            break;
        case "a" :
            var a =  new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        case "s" :
            var s =  new Audio("sounds/snare.mp3");
            s.play();
            break;
        case "d" :
            var d = new Audio("sounds/tom-1.mp3");
            d.play();
            break;
        case "j" :
            var j =  new Audio("sounds/tom-2.mp3");
            j.play();
            break;
        case "k" :
            var k = new Audio("sounds/tom-3.mp3");
            k.play();
            break;
        case "l" :
            var l = new Audio("sounds/tom-4.mp3");
            l.play();
            break;
        default :
        alert("invalid choice");
        break;
    }
    }

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 750);
}
