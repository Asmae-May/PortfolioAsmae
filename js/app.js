/******************** ouvrir une nouvelle page HTML apres le clic  ***************** */

//const { active } = require("browser-sync");
$('.header').load('../common/header.html');
$('.BE2').load('BE.html');
$('.FrontEnd2').load('FE.html');
$('.Desg').load('Design.html');
$('.BD').load('DataBase.html');

/******************** Change Button Color OnClick *****************/

var btnBE= document.querySelector('#btnBE');
    if(btnBE){
    btnBE.addEventListener('click',() => btnBE.style.backgroundColor='#C7C7C7');
}
var btnFE= document.querySelector('#btnFE');
if(btnFE){
    var btnFE= document.querySelector('#btnFE');
    btnFE.addEventListener('click',() => btnFE.style.backgroundColor='#C7C7C7');
}

var btnDesg= document.querySelector('#btnDesg');
if(btnDesg){
    var btnDesg= document.querySelector('#btnDesg');
    btnDesg.addEventListener('click',() => btnDesg.style.backgroundColor='#C7C7C7');
}
var btnDataB= document.querySelector('#btnDataB');
if(btnDataB){
    var btnDataB= document.querySelector('#btnDataB');
    btnDataB.addEventListener('click',() => btnDataB.style.backgroundColor='#C7C7C7');
}

 

/******************** background menu ****************

document.getElementById("aboutColor").addEventListener("click", displayDate);

function displayDate() {
 document.getElementById("aboutColor").classList.add("active");
 document.getElementById("homeColor").classList.remove("active");
}

function ColorMenu(){
    document.getElementById('aboutColor').style.backgroundColor = "#C82647";
}*/