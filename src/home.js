export const createHomeContent = (sectionOfPage) => {

    sectionOfPage.style.justifyContent = "center";
    sectionOfPage.style.backgroundColor = "unset";

    const mainSectionHeader = document.createElement("div");
    mainSectionHeader.style.display = "flex";
    mainSectionHeader.style.alignItems = "center";
    mainSectionHeader.style.justifyContent = "center";
    mainSectionHeader.style.height = "20%";
    mainSectionHeader.style.borderBottom = "solid #F7B267";
    
    const restaurantNameHeader = document.createElement("h2");
    restaurantNameHeader.style.all = "unset";
    restaurantNameHeader.textContent = "Pasta Kings";
    restaurantNameHeader.style.color = "#F7B267";
    restaurantNameHeader.style.fontSize = "4rem";
    restaurantNameHeader.style.position = "relative";
    
    const restaurantNameHeaderTwo = document.createElement("h1");
    restaurantNameHeaderTwo.style.all = "unset";
    restaurantNameHeaderTwo.textContent = "THE ONE AND ONLY";
    restaurantNameHeaderTwo.style.color = "white";
    restaurantNameHeaderTwo.style.fontSize = "4.5rem";
    restaurantNameHeaderTwo.style.position = "absolute";
    restaurantNameHeaderTwo.style.marginTop = "90px";
    
    mainSectionHeader.appendChild(restaurantNameHeader);
    mainSectionHeader.appendChild(restaurantNameHeaderTwo);

    const restaurantInformation = document.createElement("p");
    restaurantInformation.textContent = "Pasta that offers permanent satisfaction!"
    restaurantInformation.style.textAlign = "center";
    restaurantInformation.style.fontSize = "1.5rem";
    restaurantInformation.style.paddingLeft = "20%";
    restaurantInformation.style.paddingRight = "20%";
    restaurantInformation.style.color = "white";

    const secondMenuButton = document.createElement("button");
    secondMenuButton.style.all = "unset";
    secondMenuButton.style.display = "flex";
    secondMenuButton.style.cursor = "pointer";
    secondMenuButton.textContent = "THE MENU";
    secondMenuButton.style.fontSize = "1rem";
    secondMenuButton.style.height = "4%"
    secondMenuButton.style.width = "12%";
    secondMenuButton.style.backgroundColor = "#F7B267";
    secondMenuButton.style.color = "black";
    secondMenuButton.style.justifyContent = "center";
    secondMenuButton.style.alignItems = "center";


    secondMenuButton.addEventListener("mouseover", (event) => {
        secondMenuButton.style.color = "white";

    });
    
    secondMenuButton.addEventListener("mouseleave", (event) => {
        secondMenuButton.style.color = "black";

    });

    sectionOfPage.appendChild(mainSectionHeader);
    sectionOfPage.appendChild(restaurantInformation);
    sectionOfPage.appendChild(secondMenuButton);
}