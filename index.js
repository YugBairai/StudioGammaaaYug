const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const main_text = document.querySelector(".main-text");
const main = document.querySelector(".main");
const overlay = document.querySelector(".overlay");
const top_overlay = document.querySelector(".top-overlay");

const page1 = document.querySelector(".page1");
const video = document.querySelector(".mouse-pointer-video-container");

const page2 = document.querySelector(".page2");
const dot = document.querySelector(".mouse-pointer-dot");

const playground_text = document.querySelector(".playground_text");
const card_1 = document.getElementById("card-1");
const card_2 = document.getElementById("card-2");
const card_3 = document.getElementById("card-3");
const card_4 = document.getElementById("card-4");


// console.log(document.querySelectorAll(".playground_text"))

let flag = false;

menu.addEventListener("click", ()=> {
    if(!flag){
        main_text.style.transform = "translate(300px, -1100px)";
        main.style.transform = "rotate(30deg)";
        overlay.style.transform = "translate(-200px, -500px)";
        top_overlay.style.height = "100vh";
        top_overlay.style.transform = "rotate(0deg)";
        top_overlay.style.top = "0";
        console.log(main_text);
        menu.textContent = "close";
        
        flag = true;
    }
    else{
        main_text.style.transform = "translate(0, 0)";
        main.style.transform = "rotate(0)";
        overlay.style.transform = "translate(-1100px, -300px)";
        top_overlay.style.height = "0";
        top_overlay.style.transform = "rotate(-10deg)";
        menu.textContent = "menu";
        top_overlay.style.top = "-150px";
        flag = false;
    }
})

const handle_mousemove_event = (page, ele, hide = null) => {

    page.addEventListener("mousemove", (e)=>{
    
        setTimeout((e) => {
            ele.style.zIndex = "1000";
            ele.style.left = (e.x + 15) + "px";
            ele.style.top = (e.y + 15) + "px";
            if(hide)
                hide.style.zIndex = "-1";
        }, 200, e)
    })
}
handle_mousemove_event(page1, video, dot);
