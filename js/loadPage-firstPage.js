var TypewriterDown=null;
window.onload=function () {
    var body=document.getElementsByTagName('body')[0];
    var header=document.querySelector('body>header');
    var loadpage=document.getElementById('load-page');
    var span=document.querySelector('#load-page span');
    var plane=document.getElementById('plane');
    var pre=document.querySelector('#pre');



    setTimeout(function () {
        span.style.display="none";
        loadpage.firstElementChild.classList.add('bigger');
    },1000);
    setTimeout(function () {
        body.style.backgroundColor="#ffd200";
        header.style.opacity="1";
        loadpage.style.display="none";
        plane.classList.add('planein');
    },1500);
    setTimeout(function () {
        //取消飞机进入动画,增加飞机晃动动画
        plane.classList.remove('planein');
        plane.classList.add('planemove');

        //需要打字效果的内容
        var text = ["B", "e", "t", "a", "A", "p", "p", "H", "o", "s", "t", "<br>", "{", "<br>", "   ", "r", "e", "t", "u", "r", "n", " ", '"', "f", "i", "r", ".", "i", "m", '"', "<br>", "}"];
        var content = "";
        var index = 0;
        TypewriterDown = setInterval(function () {
            content += text[index];
            pre.innerHTML = content + "|";
            index++;
            if(index === text.length){
                pre.innerHTML = content ;
                clearInterval(TypewriterDown);
            }
        },80);

    },2000)
}