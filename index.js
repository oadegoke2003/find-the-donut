    var up = 0;
    var down = 0;
    var left = 0;
    var right = 0;
    var position = "Beginning";
    var points = 0;
    var roomSize = 5;
    var image = document.getElementById("image");
    
  main();

  function main() {
    findTheDonut1();
  }

  function findTheDonut1() {

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
    
  


  
  