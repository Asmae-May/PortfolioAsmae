/////////////////////////////////// ---- SPM ---- ///////////////////////////

var btnPopupWork = document.getElementById('btnPopupWork');

var overlayWork = document.getElementById('overlayWork');
if(btnPopupWork){
    btnPopupWork.addEventListener('click',openMoadl2);
}
function openMoadl2() {
    overlayWork.style.display='block';
}

var btnCloseWork = document.getElementById('btnCloseWork');
if(btnCloseWork){
    btnCloseWork.addEventListener('click',closeModal2);
}
function closeModal2() {
    overlayWork.style.display='none';
}


///////////////////////////////////  ---- PLALOG ----///////////////////////////

var btnPopupWorkPLALOG = document.getElementById('btnPopupWorkPLALOG');

var overlayWorkPLALOG = document.getElementById('overlayWorkPLALOG');
if(btnPopupWorkPLALOG){
    btnPopupWorkPLALOG.addEventListener('click',openMoadlPlalog);
}
function openMoadlPlalog() {
    overlayWorkPLALOG.style.display='block';
}

var btnCloseWorkPlalog = document.getElementById('btnCloseWorkPlalog');
if(btnCloseWorkPlalog){
    btnCloseWorkPlalog.addEventListener('click',closeModalPLALOG);
}
function closeModalPLALOG() {
    overlayWorkPLALOG.style.display='none';
}