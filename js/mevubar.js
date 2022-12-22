window.onload = function() {
    let gnb = document.querySelectorAll('#gnb>li');
    let gnbElement = document.querySelector('#gnb');

for(i=0; i<gnb.length; i++){
    gnb[i].addEventListener('mouseover', function(){
    gnbElement.classList.add('on');       
    });
}

let headerElement = document.querySelector('header');

headerElement.addEventListener('mouseout', function(e){
    if(e.target.id=='gnb'){
        gnbElement.classList.remove('on');
    }
});
}