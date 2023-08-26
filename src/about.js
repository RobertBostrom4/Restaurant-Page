export const createAboutContent = (sectionOfPage) => {


    sectionOfPage.style.backgroundColor = "white";
    sectionOfPage.style.justifyContent = "flex-start";
    
    const mainSectionHeader = document.createElement("div");
    mainSectionHeader.style.display = "flex";
    mainSectionHeader.style.flexDirection = "column";
    mainSectionHeader.style.alignItems = "center";
    mainSectionHeader.style.height = "20%";
    
    const restaurantNameHeader = document.createElement("h2");
    restaurantNameHeader.style.all = "unset";
    restaurantNameHeader.textContent = "Pasta Kings";
    restaurantNameHeader.style.color = "#F7B267";
    restaurantNameHeader.style.fontSize = "5rem";
    restaurantNameHeader.style.position = "relative";
    
    const restaurantNameHeaderTwo = document.createElement("h1");
    restaurantNameHeaderTwo.style.all = "unset";
    restaurantNameHeaderTwo.textContent = "OUR MISSION";
    restaurantNameHeaderTwo.style.fontSize = "5rem";
    restaurantNameHeaderTwo.style.position = "absolute";
    restaurantNameHeaderTwo.style.marginTop = "50px";
    mainSectionHeader.style.borderBottom = "solid #F7B267";
    
    mainSectionHeader.appendChild(restaurantNameHeader);
    mainSectionHeader.appendChild(restaurantNameHeaderTwo);

    const restaurantInformation = document.createElement("p");
    restaurantInformation.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod";
    restaurantInformation.style.textAlign = "center";
    restaurantInformation.style.fontSize = "1.5rem";
    restaurantInformation.style.paddingLeft = "20%";
    restaurantInformation.style.paddingRight = "20%";

    sectionOfPage.appendChild(mainSectionHeader);
    sectionOfPage.appendChild(restaurantInformation);

}