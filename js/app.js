$('.header').load('../common/header.html');
$('.PicContatc').load('../common/PicContatc.html');
//$('.BE').load('BackEnd.html');
$('.BE2').load('BE.html');
$('.FE').load('FrontEnd.html');

/******************** Change Button Color OnClick ***************** */
let btnBE= document.querySelector('#btnBE');
btnBE.addEventListener('click',() => btnBE.style.backgroundColor='#F6E3CE');

let btnFE= document.querySelector('#btnFE');
btnFE.addEventListener('click',() => btnFE.style.backgroundColor='#F6E3CE');


    
