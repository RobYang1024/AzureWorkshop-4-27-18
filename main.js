/* Code regarding background color changing taken from
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events */

/* Generates an integer between 0 and [number], inclusive */
function random(number) {
  return Math.floor(Math.random()*(number+1));
}

var magic_button = document.getElementById("magic_button");
var color_btn = document.getElementById("color_button");
var random_button = document.getElementById("random_button");

magic_button.onclick = function() {
  alert("Alakazam!");
}

color_btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

random_button.onclick = function() {
  var input_val = document.getElementById("input").value;
  var random_num_output = document.getElementById("random_num").innerHTML;
  if (input_val.trim()=="") {
    alert("Nope, I handle empty inputs and spaces only inputs!");
    document.getElementById("whale").innerHTML = "";
    document.getElementById("random_num").innerHTML = "Nice try though!";
  }

  /* This part took me a little too long not gonna lie */
  else if (input_val == "Moby Dick"){
    alert("THERE SHE BLOWS! THERE SHE BLOWS! A HUMP LIKE A SNOW-HILL! IT IS MOBY DICK!")

    let str01 = "<pre> .-------------'```'----......,,__                        _,<br>";
    let str02 = "|                                `'`'`'`'-.,.__        .' (<br>";
    let str03 = "|                                               `'--._.'   )<br>";
    let str04 = "|                                                     `'-.<<br>";
    let str05 = "\\               .-'`'-.                              -.    `\\<br>";
    let str06 = " \\               -.o_.     _                       _,-'`\\    |<br>";
    let str07 = "  ``````''--.._.-=-._    .'  \              _,,--'`      `-._(<br>";
    let str08 = "    (^^^^^^^^`___    '-. |    \  __,,,...--'                 `<br>";
    let str09 = "     `````````   `'--..___\    |`<br>";
    let str10 = "                           `-.,'</pre>";
    document.getElementById("whale").innerHTML = 
    (str01.concat(str02).concat(str03).concat(str04).concat(str05)
    .concat(str06).concat(str07).concat(str08).concat(str09).concat(str10));

    document.getElementById("random_num").innerHTML = "";

  }
  else if (isNaN(input_val)){
    alert("Sorry friend,");
    document.getElementById("whale").innerHTML = "";
    document.getElementById("random_num").innerHTML = "I only accept number inputs!";
  }
  else if (input_val<1){
    alert("As a reminder,");
    document.getElementById("whale").innerHTML = "";
    document.getElementById("random_num").innerHTML = "I only accept positive inputs greater than or equal to 1!";
  }
  else {
    document.getElementById("whale").innerHTML = "";
    document.getElementById("random_num").innerHTML = random(input_val-1) + 1;
  }
}