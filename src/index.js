import { pageLoad } from "./initialLoad";
import { createAboutContent } from "./about.js";
import { createHomeContent } from "./home.js";
import { createMenuContent } from "./menu.js";

document.body.appendChild(pageLoad());

const header = document.querySelector("#header");
const mainSection = document.querySelector("#main");


for (let tab of header.children) {

    switch (tab.id) {
        case "HOME":

            tab.addEventListener("click", (event) => {
                removeAllChildNodes();
                createHomeContent(mainSection);
            });


            break;

        case "MENU":

            tab.addEventListener("click", (event) => {
                removeAllChildNodes();
                createMenuContent(mainSection);
            });
            break;
        case "ABOUT":


            tab.addEventListener("click", (event) => {

                removeAllChildNodes();
                createAboutContent(mainSection);
            });
            break;

    }


}

const removeAllChildNodes = () => {

    while (mainSection.hasChildNodes()) {
        mainSection.removeChild(mainSection.lastChild);
    }
}
