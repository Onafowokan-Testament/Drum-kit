
for (var i = 0 ; i < document.querySelectorAll('.drum').length  ; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        
    var innerHtml = this.innerHTML;
   perform(innerHtml);
add_animation(innerHtml)}
      

    
    
) };

document.addEventListener('keydown', function (e) {
    perform(e.key)
    add_animation(e.key)}
      
)

function add_animation(key){
    chosen_key = document.querySelector("."+ key);
    chosen_key.classList.add("pressed");

    setTimeout(function() {
        chosen_key.classList.remove("pressed");
    }, 0.01)
}

function perform (innerHtml){
    switch (innerHtml) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "a":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
        
        break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        
        break;

        case "d":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
        
        break;

        case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
        
        break;

        case "k":
            var tom_3 = new Audio("sounds/tom-3.mp3");
        tom_3.play();
        
        break;

        case "l":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
        
        break;

    

    default:
        break;

}
}