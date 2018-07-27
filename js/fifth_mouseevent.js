var span=document.querySelectorAll('#userIcon>span');
var p=document.querySelectorAll('#userSay>p');
var fifth_page=document.getElementById('fifth-page');

for(var index=0;index<span.length;index++){
    (function (x) {
        span[x].onmouseover=function () {
            span[x].style.backgroundColor="white";
            p[x].classList.add('wordsShow');
            for(var i=0;i<p.length;i++){
                if(x!=i){
                    p[i].classList.remove('wordsShow');
                    p[i].style.opacity="0";
                    span[i].style.backgroundColor="transparent";
                    span[i].style.color="white";
                }
            }
            if(x==0){
                span[x].style.color="#3c81df";
                fifth_page.style.backgroundColor="#3c81df";
            }else if(x==1){
                span[x].style.color="#e3a520";
                fifth_page.style.backgroundColor="#e3a520";
            }else if(x==2){
                span[x].style.color="#d85245";
                fifth_page.style.backgroundColor="#d85245";
            }else if(x==3){
                span[x].style.color="#11b076";
                fifth_page.style.backgroundColor="#11b076";
            }else if(x==4){
                span[x].style.color="#9e5c42";
                fifth_page.style.backgroundColor="#9e5c42";
            }
        }
    })(index);
}
