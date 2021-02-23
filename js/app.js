/******************** ouvrir une nouvelle page HTML apres le clic  ***************** */

$('.header').load('../common/header.html');
$('.BE2').load('BE.html');
$('.FrontEnd2').load('FE.html');
$('.Desg').load('Design.html');
$('.BD').load('DataBase.html');

/******************** Change Button Color OnClick *****************/

var btnBE= document.querySelector('#btnBE');
    if(btnBE){
    btnBE.addEventListener('click',() => btnBE.style.backgroundColor='#D3C9C1');
}
var btnFE= document.querySelector('#btnFE');
if(btnFE){
    var btnFE= document.querySelector('#btnFE');
    btnFE.addEventListener('click',() => btnFE.style.backgroundColor='#D3C9C1');
}

var btnDesg= document.querySelector('#btnDesg');
if(btnDesg){
    var btnDesg= document.querySelector('#btnDesg');
    btnDesg.addEventListener('click',() => btnDesg.style.backgroundColor='#D3C9C1');
}
var btnDataB= document.querySelector('#btnDataB');
if(btnDataB){
    var btnDataB= document.querySelector('#btnDataB');
    btnDataB.addEventListener('click',() => btnDataB.style.backgroundColor='#D3C9C1');
}

 

/******************** Slick ***************** */

    
