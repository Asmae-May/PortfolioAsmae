var btnPopup = document.getElementById('btnPopup');

var overlay = document.getElementById('overlay');
if(btnPopup){
btnPopup.addEventListener('click',openMoadl);
}
function openMoadl() {
overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
if(btnClose){
btnClose.addEventListener('click',closeModal);
}
function closeModal() {
overlay.style.display='none';
}