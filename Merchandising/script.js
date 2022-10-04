const btnTrack  = document.querySelector('.btn-click-track');
const rip = document.querySelector('.raiseItemPosition');
const disct = document.querySelector('.btn-click-discount');

const para1 = document.querySelector('.para-1');
const para2 = document.querySelector('.para-2');
const para3 = document.querySelector('.para-3');

btnTrack.addEventListener('click', function(){
    // para1.style.display="block";
    if(para1.style.display!=="block"){
        para1.style.display="block";
    }
    else{
        para1.style.display="none";
    }
});
rip.addEventListener('click', function(){
    // para1.style.display="block";
    if(para2.style.display!=="block"){
        para2.style.display="block";
    }
    else{
        para2.style.display="none";
    } 
});
disct.addEventListener('click', function(){
    // para1.style.display="block";
    if(para3.style.display!=="block"){
        para3.style.display="block";
    }
    else{
        para3.style.display="none"; 
    }
}); 

const hamburger = document.getElementById('line');
const mobview = document.getElementById('mobile');
hamburger.addEventListener('click', ()=> {
    // mobview.style.display="block";
    if(mobview.style.display = "none"){ 
        mobview.style.display = "block";
    }
});

/* Navbar mobile click karne pe band */
function cls(){
    mobview.style.display="none";
}