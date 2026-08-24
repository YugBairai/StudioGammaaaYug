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
handle_mousemove_event(page2, dot, video);

const say_hello = document.querySelector(".say_hello");
const footer_email = document.querySelector(".footer_email");

const add_text_to_dot_on_hover = (hover_ele, inner_text) => {
    hover_ele.addEventListener("mousemove", ()=>{
        dot.textContent = inner_text.toUpperCase();
        dot.style.height = "auto";
        dot.style.width = "auto";
        dot.style.padding = "8px";
        dot.style.color = "#E4E4E4";
        dot.style.borderRadius = "10%";
        dot.style.fontSize = "30px";
        dot.style.transform = "rotate(-5deg)";
        hover_ele.style.cursor = "pointer";
    });
    hover_ele.addEventListener("mouseleave", ()=>{
        dot.textContent = "";
        dot.style.height = "15px";
        dot.style.width = "15px";
        dot.style.padding = "0";
        dot.style.color = "";
        dot.style.borderRadius = "100%";
        dot.style.fontSize = "0";
        dot.style.transform = "";
        hover_ele.style.cursor = "inherit";
    });
};
add_text_to_dot_on_hover(playground_text, "Playground");
add_text_to_dot_on_hover(card_1, "Matera")
add_text_to_dot_on_hover(card_2, "Chance")
add_text_to_dot_on_hover(card_3, "Silver")
add_text_to_dot_on_hover(card_4, "Intramuros")
add_text_to_dot_on_hover(footer_email, "Send Love")
add_text_to_dot_on_hover(say_hello,"Let's Talk")

// console.log(text_container2.children);
// for (let child of text_container2.children) {
//   console.log(child);
// }
const text_container2 = document.querySelector(".text-container2");

const text_hover_style = (text_container2_div) => {
    // console.log(text_container2_div);

    const [left, center, right] = text_container2_div.children;
    // console.log(left);

    center.addEventListener("mouseover", ()=>{

        center.style.cursor = "normal";
        left.style.opacity = "1";
        right.style.opacity = "1";
        
        // console.log(left)
        // const text_container2_divs = [...text_container2.children];
        const filtered_divs = [...text_container2.children].filter(div => div !== text_container2_div);
        
        filtered_divs.forEach(div => {
            // console.log(div);
            let [ ,middle ] = div.children;
            // console.log(middle)
            middle.style.color = "#cbcaca";
        })

    });
    
    center.addEventListener("mouseleave", ()=>{

        left.style.opacity = "0";
        right.style.opacity = "0";
        
        // const text_container2_divs = [...text_container2.children];
        const filtered_divs = [...text_container2.children].filter(div => div !== text_container2_div);
        
        filtered_divs.forEach(div => {
            console.log(div);
            let [ ,middle ] = div.children;
            // console.log(middle)
            middle.style.color = "inherit";
        })

    });
}
// console.log(text_container2.children)
const text_container2_divs = [...text_container2.children]
// console.log(text_container2_divs)
text_container2_divs.forEach(text_container2_div => {
    text_hover_style(text_container2_div);
});


const card = document.getElementsByClassName("card");
const cards = [...card];
cards.forEach(card => {
    const video = card.firstElementChild;
    // console.log(video)
    card.addEventListener("mouseover", ()=>{
        video.style.visibility = "visible";
        video.style.opacity = "1";
        card.style.backgroundColor = "rgba(0,0,0,0.4)";
        card.style.backgroundBlendMode = "multiply";

    });
    card.addEventListener("mouseleave", ()=>{
        video.style.visibility = "hidden";
        video.style.opacity = "0";
        card.style.backgroundColor = "";
        card.style.backgroundBlendMode = "";
    });
});

