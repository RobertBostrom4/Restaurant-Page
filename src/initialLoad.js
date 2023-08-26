import { createHomeContent } from "./home.js";

export function pageLoad() {

    const body = document.querySelector("body");
    body.style.height = "100vh";
    body.style.width = "100vw";

    const content = document.querySelector("#content");
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.width = "100%";
    content.style.height = "100%";
    content.style.background = "url('./background.jpg')";
    content.style.backgroundSize = "100% 100%";


    const header = document.createElement("navbar");
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
    header.style.gap = "5%";
    const home = document.createElement("button");
    home.id = "HOME";
    const menu = document.createElement("button");
    menu.id = "MENU";
    const aboutUs = document.createElement("button");
    aboutUs.id = "ABOUT";

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(aboutUs);
    header.id = "header";
    header.style.borderStyle = "solid";
    header.style.borderBottomColor = "#F7B267";


    const main = document.createElement("div");
    main.id = "main";
    main.style.borderStyle = "solid";
    main.style.borderBottomColor = "#F7B267";
    main.style.display = "flex";
    main.style.flexDirection = "column";
    main.style.alignItems = "center";

    for (let button of header.children) {
        button.style.all = "unset";
        button.style.cursor = "pointer";
        button.textContent = button.id;
        button.style.color = "white";
        button.style.fontSize = "1.8rem";

        button.addEventListener("mouseover", (event) => {

            button.style.borderBottom = "solid #F7B267";

        });

        button.addEventListener("mouseleave", (event) => {

            button.style.color = "white";
            button.style.borderBottom = "none";
        });

    }

    const footer = document.createElement("footer");
    footer.id = "footer";
    footer.style.display = "flex";
    footer.style.justifyContent = "center";
    footer.style.alignItems = "center";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Developed by Robert Bostrom";
    paragraph.style.color = "#F7B267";
    paragraph.style.fontSize = "1.4rem";
    footer.appendChild(paragraph);

    header.style.width = "100%";
    header.style.height = "10%";
    main.style.width = "100%";
    main.style.height = "80%";
    footer.style.width = "100%";
    footer.style.height = "10%";
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);


    createHomeContent(main);

    return content;


} 