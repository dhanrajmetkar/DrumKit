

for (let i = 0; i < document.querySelectorAll(".drum").length; i++)
 {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        //    var audio=new Audio("sounds/crash.mp3");
        //    audio.play();
        // this.style.color="white";
        var buttonpress = this.innerHTML;
        makeSoundz(buttonpress);
        animation(buttonpress);


    });

    document.addEventListener("keypress", function (event) {
  makeSoundz(event.key);
  animation(event.key);
       
    })
}
    function makeSoundz(key) 
    {

        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            default:
                console.log(buttonpress)

        }

    }

    function animation(currentkey)
    {
       var active_button= document.querySelector("."+currentkey);
      active_button.classList.add("pressed");

        setTimeout(() => {
            active_button.classList.remove("pressed");
        }, 1000);
       
    }
