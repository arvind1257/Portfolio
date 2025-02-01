function switchTab1(index){
    const tab  = document.querySelectorAll(".content-3 .tabLink");
    const tabContent = document.querySelectorAll(".content-3 .sub-content");
    for(let i=0;i<tab.length;i++){
        tab[i].classList.remove("active");
        tabContent[i].style.display="none";
    }
    tab[index-1].classList.add("active");
    tabContent[index-1].style.display="block";
}
switchTab1(1);
var current_tab = 1;
window.addEventListener("scroll",()=>{
    const tab  = document.querySelectorAll(".tab_link");
    const tabContent = document.querySelectorAll("section");
    for(let i=0;i<tabContent.length;i++){
        if(window.scrollY>=(tabContent[i].offsetTop - tabContent[i].clientHeight/4)){
            current_tab = i+1;
        }
        tab[i].classList.remove("active");
    }
    tab[current_tab-1].classList.add("active");


})

if(document.querySelector(".menu-list").style.display=="none"){
    document.querySelector("#bars").style.display="none";
    document.querySelector("#times").style.display="block";
    document.querySelector(".menu-list").style.top="56px";
}
else{
    document.querySelector("#bars").style.display="block";
    document.querySelector("#times").style.display="none";
    document.querySelector(".menu-list").style.top="-200px";
}

function openmenu(){
    if(document.querySelector(".menu-list").style.top=="-200px"){
        document.querySelector("#bars").style.display="none";
        document.querySelector("#times").style.display="block";
        document.querySelector(".menu-list").style.top="56px";
    }
    else{
        document.querySelector("#bars").style.display="block";
        document.querySelector("#times").style.display="none";
        document.querySelector(".menu-list").style.top="-200px";
    }
}