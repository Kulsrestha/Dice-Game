var randomNo1 = Math.floor(Math.random()*6)+1; //1-6

var randomImgName = "dice"+randomNo1+".png";

var ImgPath = "/images/"+randomImgName;

var Img1 = document.querySelectorAll("img")[0];

Img1.setAttribute("src",ImgPath);

var randomNo2 = Math.floor(Math.random()*6)+1; //1-6

var ImgPath2 = "/images/dice"+randomNo2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",ImgPath2);

if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="🎌Player 1 Wins!";
}
else if(randomNo1<randomNo2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🎌";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
