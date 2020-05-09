    var up = document.getElementById("Up");
    var down = document.getElementById("Down");
    var left = document.getElementById("Left");
    var right = document.getElementById("Right");
    var position = "Beginning";
    var points = 0;
    var roomSize = 5;
    var image = document.getElementById("image");
    var ButtonImage = ["/images/kangaroo.jpg", "/images/clown.jpg", "/images/bear.jpg", "/images/addison.jpg", "/images/cow.jpg", "/images/doctor.png", "/images/prince.jpg",  "/images/Eric.jpg", "/images/cat.jpg", "/images/rat.jpg", "/images/bigBird.jpg", "/images/beyonce.jpg", "/images/empty.jpg", "/images/donut.jpg", "/images/chef.jpg", "/images/empty2.jpg"];
    
  main();

  function main() {
    welcome();
  }

  function welcome() {

    var fullName;
    var instructions = "";

    fullName = prompt("Enter your firstName and lastName");
    document.write("<p>Welcome to find the donut " + fullName + "</p>");

    instructions = "The purpose of this game is for you to find the hidden donut in one of the rooms.";
    instructions = instructions + "<br>You would use the buttons provided on the screen to search each rooms.";
    instructions = instructions + "<br>For every room you enter, you get points. Beware, in one of the rooms is a clown.<br>If you enter thay room, you loose all your points and start again.";
    instructions = instructions + "<p>Goodluck " + fullName + "</p>";

    document.write(instructions);
  }

   up.addEventListener("click", changeImage);
   down.addEventListener("click", changeImage);
   left.addEventListener("click", changeImage);
   right.addEventListener("click", changeImage);

 function changeImage() {
    var random = buttonImage[Math.floor(Math.random)() * buttonImage.length];
    document.getElementById("image").innerHTML = random;
    
 }
    
  


  
  