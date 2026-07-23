
function randomnumgenerate(){
var randomnumber=Math.random();
randomnumber=Math.floor((randomnumber*5))+1;
return randomnumber;
}

var score1=randomnumgenerate();
var score2=randomnumgenerate();
var imgsource1="./images/dice"+score1+".png";
var imgsource2="./images/dice"+score2+".png";

document.querySelectorAll("img")[0].setAttribute("src",imgsource1);
document.querySelectorAll("img")[1].setAttribute("src",imgsource2);

if(score1>score2){
    document.querySelector("h1").innerHTML="&#127941 Player 1";
}
else if (score1<score2){
    document.querySelector("h1").innerHTML="Player 2 &#127941";
}else{
    document.querySelector("h1").innerHTML="&#129309 Draw &#129309";
}