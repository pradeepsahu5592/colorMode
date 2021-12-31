// let container = document.querySelector("container");
// let btn1 = document.querySelector("btn1");

const container = document.getElementById("container");
const backbody = document.getElementById("backbody");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");
const title = document.getElementById("title");

function rm(){
    container.classList.remove("color1");
    backbody.classList.remove("color1");
    container.classList.remove("color2");
    backbody.classList.remove("color2");
    container.classList.remove("color3");
    backbody.classList.remove("color3");
    container.classList.remove("color4");
    backbody.classList.remove("color4");
    container.classList.remove("color5");
    backbody.classList.remove("color5");
    title.classList.remove("white");
    txt1.classList.remove("white");
    txt2.classList.remove("white");
    txt3.classList.remove("white");
}
btn1.addEventListener("click",()=>{
    rm();

    container.classList.add("color1");
    backbody.classList.add("color1");
    title.classList.add("white");
    txt1.classList.add("white");
    txt2.classList.add("white");
    txt3.classList.add("white");
    
})

btn2.addEventListener("click",()=>{
    rm();
    
    container.classList.add("color2");
    backbody.classList.add("color2");
})

btn3.addEventListener("click",()=>{
    rm();

    container.classList.add("color3");
    backbody.classList.add("color3");
    title.classList.add("white");
    txt1.classList.add("white");
    txt2.classList.add("white");
    txt3.classList.add("white");
})

btn4.addEventListener("click",()=>{
    rm();

    container.classList.add("color4");
    backbody.classList.add("color4");
})

btn5.addEventListener("click",()=>{
    rm();

    container.classList.add("color5");
    backbody.classList.add("color5");
})
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let time = new Date();

txt1.innerHTML=time.getDate();
txt2.innerHTML=month[time.getMonth()];
txt3.innerHTML=time.getFullYear();
