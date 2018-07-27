var firsPage=document.getElementById('first-page');
var secondPage=document.getElementById('second-page');
var thirdPage=document.getElementById('third-page');
var fourthPage=document.getElementById('fourth-page');
var fifthPage=document.getElementById('fifth-page');
var sixthPage=document.getElementById('sixth-page');

var childPage=document.querySelectorAll('article>section');
var navbar=document.getElementById('navbar');
var plane=document.getElementById('plane');
var Typewriter=document.getElementById('Typewriter');
var Typewriter=document.getElementById('TypewriterDown2');
var likes=document.getElementById('Likes');
var smile=document.getElementById('smile');

var boxs=document.getElementsByClassName('box');
var words=document.getElementsByClassName('words');
var B_top_R=document.getElementsByClassName('B-top-R');
var B_top_L=document.getElementsByClassName('B-top-L');

var logo=document.querySelector('#left-logo>a');
var i=document.querySelectorAll('#right-tag>ul>li>i');
var li=document.querySelectorAll('#right-tag>ul>li');
//第二页面的元素选择
var S_left=document.querySelector('#second-page>.left');
var S_left_div=document.querySelector('#second-page>.left>div');
var S_middle=document.querySelector('#second-page>.middle');
var S_middle_div=document.querySelector('#second-page>.middle>div');
var S_right=document.querySelector('#second-page>.right');
var S_right_div=document.querySelector('#second-page>.right>div');
//第三页面的元素选择
var T_left=document.querySelector('#third-page>.left');
var T_left_div=document.querySelector('#third-page>.left>div');
var T_middle=document.querySelector('#third-page>.middle');
var T_middle_div=document.querySelector('#third-page>.middle>div');
var T_right=document.querySelector('#third-page>.right');
var T_right_div=document.querySelector('#third-page>.right>div');

var second_LMR=secondPage.children;
var third_LMR=thirdPage.children;
var T_L_Child=third_LMR[0].firstElementChild;
var T_M_Child=third_LMR[1].firstElementChild;
var T_R_Child=third_LMR[2].firstElementChild;

var flag=true;//滚轮开关
var pageNum=1;
var TypewriterDown2=null;
var TypewriterDown3=null;
var itl=null;

/*
* 初始化第二界面,第三界面左中右的宽度
* */
function init() {
    var body=document.documentElement||document.body;
    var box=document.getElementById('allBox');
    var bwidth=body.clientWidth;
    for(var i=0;i<second_LMR.length;i++){
        second_LMR[i].style.width=Math.floor(bwidth/3)+"px";
        third_LMR[i].style.width=Math.floor(bwidth/3)+"px";
        second_LMR[i].style.height=body.clientHeight+"px";
        third_LMR[i].style.height=body.clientHeight+"px";
    }
    var width=parseFloat(second_LMR[2].style.width);
    var box_top=(body.clientHeight-600)/2;
    if(box_top>66){
        box.style.marginTop=box_top+'px';
    }else{
        box.style.marginTop=66+'px';
    }
    second_LMR[2].style.width=width+(bwidth-width*3)+"px";
    third_LMR[2].style.width=width+(bwidth-width*3)+"px";
}
init();
window.onresize=function () {
    init();
}

var scrollFunc=function(e) {
    evt = e || window.event;  //判断浏览器IE，谷歌滑轮事件

    if(flag){
        flag=false;
        if (evt.wheelDelta > 0||evt.detail< 0) { //当滑轮向上滚动时,上一页
            if(pageNum>1){
                if(pageNum==2){
                    second_first();
                    pageNum--;
                }else if (pageNum==3){
                    third_second();
                    pageNum--;
                }else if (pageNum==4){
                    fourth_third();
                    pageNum--;
                }else if(pageNum==5){
                    fifth_fourth();
                    pageNum--;
                }else if(pageNum==6){
                    sixth_fifth();
                    pageNum--;
                }
            } else{
                flag=true;
            }
        }
        if (evt.wheelDelta < 0||evt.detail> 0) { //当滑轮向下滚动时
            if(pageNum<childPage.length-1){
                if(pageNum==1){
                    first_second();
                    pageNum++;
                }else if(pageNum==2){
                    second_third();
                    pageNum++;
                }else if(pageNum==3){
                    third_fourth();
                    pageNum++;
                }else if(pageNum==4){
                    fourth_fifth();
                    pageNum++;
                }else if(pageNum==5){
                    fifth_sixth();
                    pageNum++;
                }
            }else{
                flag=true;
            }
        }
    }
}
//给页面绑定滑轮滚动事件
setTimeout(function () {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
//滚动滑轮触发scrollFunc方法  //ie 谷歌
    document.onmousewheel = scrollFunc;
},1000);

//第一个页面跳转第二个页面的动画效果
function first_second(){
    clearInterval(TypewriterDown);
    pre.innerHTML = '';
    plane.classList.remove('planemove');
    plane.classList.add('planegone');
    setTimeout(function () {
        //使第一页面消失
        firsPage.style.display="none";
        // 显示第二个页面
        secondPage.style.display="block";
        plane.classList.remove('planegone');

        //第二页面左侧一块翻转
        S_left.style.backgroundColor="#ffd200";
        S_middle.style.backgroundColor="#ffd200";
        S_right.style.backgroundColor="#ffd200";
        S_left.classList.remove('second_reverse_Rotate1');
        S_middle.classList.remove('second_reverse_Rotate2');
        S_right.classList.remove('second_reverse_Rotate3');
        S_left.classList.add('secondRotate1');

        setTimeout(function () {
            S_left_div.style.opacity="1";
            S_middle.classList.add('secondRotate2');
        },150);
        setTimeout(function () {
            S_middle_div.style.opacity="1";
            S_right.classList.add('secondRotate3');
        },300);
        setTimeout(function () {
            S_right_div.style.opacity="1";
            flag=true;
            // firsPage.style.zIndex="0";
        },450);

        navbar.style.color="white";
        logo.style.color='white';//顶部logo变为白色
        for(var index=0;index<i.length;index++){
            i[index].style.color="white";
        }
        for(var index=0;index<li.length;index++){
            li[index].style.color="white";
            li[index].style.borderColor="white";
        }
    },1000);
}

//第二个页面跳转第一个页面的动画效果
function second_first() {
    //新建打字机
    var text = ["B", "e", "t", "a", "A", "p", "p", "H", "o", "s", "t", "<br>", "{", "<br>", "   ", "r", "e", "t", "u", "r", "n", " ", '"', "f", "i", "r", ".", "i", "m", '"', "<br>", "}"];
    var content = "";
    var m = 0;
    TypewriterDown = setInterval(function () {
        content += text[m];
        pre.innerHTML = content + "|";
        m++;
        if(m === text.length){
            pre.innerHTML = content ;
            clearInterval(TypewriterDown);
        }
    },80);

    S_left.classList.remove('secondRotate1');
    S_left.classList.add('second_reverse_Rotate1');
    setTimeout(function () {
        // firsPage.style.zIndex="6";
        S_left_div.style.opacity="0";
        S_middle.classList.add('second_reverse_Rotate2');
        S_middle.classList.remove('secondRotate2');
    },150);
    setTimeout(function () {
        S_middle_div.style.opacity="0";
        S_right.classList.add('second_reverse_Rotate3');
        S_right.classList.remove('secondRotate3');
    },300);
    setTimeout(function () {
        S_right_div.style.opacity="0";
        firsPage.style.display="display";
        secondPage.style.display="none";
        plane.classList.add('planein');
    },450);
    setTimeout(function () {
        plane.classList.remove('planein');
        plane.classList.add('planemove');
        flag=true;
    },900);

    firsPage.style.display="block";
    navbar.style.color="black";
    logo.style.color='black';
    for(var index=0;index<i.length;index++){
        i[index].style.color="black";
    }
    for(var index=0;index<li.length;index++){
        li[index].style.color="black";
        li[index].style.borderColor="black";
    }
}

//第二个页面跳转第三个页面动画效果
function second_third() {
    thirdPage.style.display="block";
    T_left.classList.remove('third_reverse_Slide1');
    T_middle.classList.remove('third_reverse_Slide2');
    T_right.classList.remove('third_reverse_Slide3');
    T_left.classList.add('thirdSlide1');
    T_middle.classList.add('thirdSlide2');
    T_right.classList.add('thirdSlide3');
    setTimeout(function () {
        secondPage.style.display='none';
        flag=true;
    },500);
}

//第三个页面跳转第二个页面动画效果
function third_second() {
    secondPage.style.display="block";
    S_left.style.backgroundColor="#05abbf";
    S_middle.style.backgroundColor="#5e5ae2";
    S_right.style.backgroundColor="#363b3d";
    S_left.classList.remove('secondRotate1');
    S_middle.classList.remove('secondRotate2');
    S_right.classList.remove('secondRotate3');
    T_left.classList.remove('thirdSlide1');
    T_middle.classList.remove('thirdSlide2');
    T_right.classList.remove('thirdSlide3');
    T_left.classList.add('third_reverse_Slide1');
    T_middle.classList.add('third_reverse_Slide2');
    T_right.classList.add('third_reverse_Slide3');
    setTimeout(function () {
        thirdPage.style.display='none';
        flag=true;
    },500);
}

//第三个页面跳转第四页面动画效果
function third_fourth() {
    fourthPage.style.display="block";
    T_left.classList.remove('thirdSlide1');
    T_middle.classList.remove('thirdSlide2');
    T_right.classList.remove('thirdSlide3');
    T_left.style.marginTop="0";
    T_middle.style.marginTop="0";
    T_right.style.marginTop="0";
    T_left.classList.add('sequential_upward');
    T_L_Child.classList.add('slowGone');
    setTimeout(function () {
        T_middle.classList.add('sequential_upward');
        T_M_Child.classList.add('slowGone');
    },100);
    setTimeout(function () {
        T_right.classList.add('sequential_upward');
        T_R_Child.classList.add('slowGone');
    },200);
    setTimeout(function () {
        thirdPage.style.display="none";
        boxs[0].classList.add('fallDown');
    },500)
    setTimeout(function () {
        words[0].classList.add('wordsUp');
        B_top_L[0].classList.add('openBox-L');
        B_top_R[0].classList.add('openBox-R');
        boxs[1].classList.add('fallDown');
    },600)
    setTimeout(function () {
        words[1].classList.add('wordsUp');
        B_top_L[1].classList.add('openBox-L');
        B_top_R[1].classList.add('openBox-R');
        boxs[2].classList.add('fallDown');
    },800)
    setTimeout(function () {
        words[2].classList.add('wordsUp');
        B_top_L[2].classList.add('openBox-L');
        B_top_R[2].classList.add('openBox-R');
        boxs[3].classList.add('fallDown');
    },1000)
    setTimeout(function () {
        words[3].classList.add('wordsUp');
        B_top_L[3].classList.add('openBox-L');
        B_top_R[3].classList.add('openBox-R');
        flag=true;
    },1200)
}
//第四个页面跳转第三页面动画效果
function fourth_third() {
    thirdPage.style.display="block";
    T_left.classList.remove('sequential_upward');
    T_middle.classList.remove('sequential_upward');
    T_right.classList.remove('sequential_upward');
    T_L_Child.classList.remove('slowGone');
    T_M_Child.classList.remove('slowGone');
    T_R_Child.classList.remove('slowGone');
    T_middle.style.marginTop="-100%";
    T_right.style.marginTop="-100%";
    T_left.classList.add('sequential_reverse_upward');
    T_L_Child.classList.add('slow_reverse_Gone');
    setTimeout(function () {
        T_middle.classList.add('sequential_reverse_upward');
        T_M_Child.classList.add('slow_reverse_Gone');
    },100);
    setTimeout(function () {
        T_right.classList.add('sequential_reverse_upward');
        T_R_Child.classList.add('slow_reverse_Gone');
        flag=true;
    },200);
    setTimeout(function () {
        fourthPage.style.display="none";
        T_left.classList.remove('sequential_reverse_upward');
        T_middle.classList.remove('sequential_reverse_upward');
        T_right.classList.remove('sequential_reverse_upward');

        T_L_Child.classList.remove('slow_reverse_Gone');
        T_M_Child.classList.remove('slow_reverse_Gone');
        T_R_Child.classList.remove('slow_reverse_Gone');
        T_middle.style.marginTop="0";
        T_right.style.marginTop="0";
        for(var index=0;index<words.length;index++){
            words[index].classList.remove('wordsUp');
            B_top_L[index].classList.remove('openBox-L');
            B_top_R[index].classList.remove('openBox-R');
            boxs[index].classList.remove('fallDown');
        }
    },500)
}
function fourth_fifth() {
    fifthPage.style.display="block";
    fifthPage.classList.remove('reverse_nextpage');
    fifthPage.classList.add('nextpage');
    flag=true;
}
function fifth_fourth() {
    fifthPage.classList.remove('nextpage');
    fifthPage.classList.add('reverse_nextpage');
    setTimeout(function () {
        fifthPage.style.display="none";
    },300);
    flag=true;
}
function fifth_sixth() {
    navbar.style.color="black";
    logo.style.color='black';
    for(var index=0;index<i.length;index++){
        i[index].style.color="black";
    }
    for(var index=0;index<li.length;index++){
        li[index].style.color="black";
        li[index].style.borderColor="black";
    }
    sixthPage.style.display="block";
    sixthPage.classList.remove('reverse_nextpage');
    sixthPage.classList.add('nextpage');

    //新建打字机
    var text1 = ["<i>&#xe645</i>","<i>&#xe644</i>","<i>&#xe60e</i>","<i>&nbsp;</i>","<i>&#xe60f</i>","<i>&#xe645</i>","<i>&#xe646</i>"];
    var text2 = ["<i>&#xe60f</i>\n","<i>&#xe645</i>","<i>&#xe646</i>","<i class='down'>&#xe644</i>","<i>&#xe645</i>","<i>&#xe60e</i>"]
    var content = "";
    var m = 0;
    //输入第一次打字效果
    TypewriterDown2 = setInterval(function () {
        clearInterval(TypewriterDown3);
        clearInterval(itl);
        content += text1[m];
        Typewriter.innerHTML = content + "";
        m++;
        if(m === text1.length){
            Typewriter.innerHTML = content ;
            clearInterval(TypewriterDown2);
        }
    },200);
    //清空第一次打字效果
    setTimeout(function () {
        itl=setInterval(function () {
            if(Typewriter.children.length!=0){
                Typewriter.removeChild(Typewriter.lastElementChild);
            }
        },100)
    },1800)
    //输入第二次打字效果
    setTimeout(function () {
        m=0;
        content = "";
        clearInterval(itl);
        TypewriterDown3 = setInterval(function () {
            content += text2[m];
            Typewriter.innerHTML = content + "";
            m++;
            if(m === text2.length){
                Typewriter.innerHTML = content ;
                clearInterval(TypewriterDown3);
            }
        },200);
    },2600)
    setTimeout(function () {
        likes.style.display="block"
        likes.classList.add('likesUp');
    },4000)
    flag=true;
}
function sixth_fifth() {
    Typewriter.textContent='';
    clearInterval(itl);
    clearInterval(TypewriterDown2);
    clearInterval(TypewriterDown3);
    likes.style.display="none"
    likes.classList.remove('likesUp');
    navbar.style.color="white";
    logo.style.color='white';
    for(var index=0;index<i.length;index++){
        i[index].style.color="white";
    }
    for(var index=0;index<li.length;index++){
        li[index].style.color="white";
        li[index].style.borderColor="white";
    }
    sixthPage.classList.remove('nextpage');
    sixthPage.classList.add('reverse_nextpage');
    setTimeout(function () {
        sixthPage.style.display="none";
    },300);
    flag=true;
}

likes.onmouseenter=function () {
    likes.children[1].classList.add('likesWidening');
}
likes.onmouseleave=function () {
    likes.children[1].classList.remove('likesWidening');
    smile.children[1].classList.remove('smileEye');
    smile.children[2].classList.remove('smileMouse');
    likes.children[1].classList.remove('smileUp');
}
likes.onclick=function () {
    likes.children[1].classList.add('smileUp');
    setTimeout(function () {
        smile.children[1].classList.add('smileEye');
        smile.children[2].classList.add('smileMouse');
    },300)
}