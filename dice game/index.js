var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randonDiceimage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randonDiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceimage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceimage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 wins therefore <u> SARTHAK BHALLA </u> will get SWASTI JAIN🙈🙈🙈";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 wins therefore <u>LOVNEESH PAL</u> will get SWASTI JAIN🙈🙈🙈";
}
else{
  document.querySelector("h1").innerHTML = "It is a draw therefore <u> SARTHAK </u> and <u> LOVNEESH </u> has to cooperate 🙈🙈🙈 <br> <br>THANK YOU";

}
