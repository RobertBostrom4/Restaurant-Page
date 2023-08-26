export const createMenuContent = (sectionOfPage) => {

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
    restaurantNameHeaderTwo.textContent = "MENU";
    restaurantNameHeaderTwo.style.fontSize = "5rem";
    restaurantNameHeaderTwo.style.position = "absolute";
    restaurantNameHeaderTwo.style.marginTop = "50px";
    mainSectionHeader.style.borderBottom = "solid #F7B267";

    mainSectionHeader.appendChild(restaurantNameHeader);
    mainSectionHeader.appendChild(restaurantNameHeaderTwo);

    const itemOne = menuItem("Spaghetti", "15");
    const itemTwo = menuItem("Ravioli", "20");
    const itemThree = menuItem("Macaroni", "25");

    
    sectionOfPage.appendChild(mainSectionHeader);
    sectionOfPage.appendChild(itemOne.getItem());
    sectionOfPage.appendChild(itemTwo.getItem());
    sectionOfPage.appendChild(itemThree.getItem());


}

const menuItem = (name, price) => {

    const item = document.createElement("div");
    item.style.display = "flex";
    item.style.flexFlow = "column";
    item.style.alignItems = "center";
    item.style.borderBottom = "solid #F7B267";
    item.style.borderBottomHeight = "6px";
    item.style.height = "20%";
    item.style.width = "40%";

    const itemName = document.createElement("h1");
    itemName.style.marginBottom = "0px";
    itemName.textContent = name;
    itemName.fontSize = "1rem";
    itemName.style.color = "#F7B267";

    const itemInformation = document.createElement("p");
    itemInformation.style.margin = "10px";
    itemInformation.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    itemInformation.style.textAlign = "center";
    itemInformation.style.fontSize = "1.5rem";

    const itemPrice = document.createElement("h1");
    itemPrice.style.marginBottom = "0px";
    itemPrice.textContent = "$" + price;
    itemPrice.style.marginTop = "5px";
    itemPrice.fontSize = "1rem";
    itemPrice.style.color = "#F7B267";

    item.appendChild(itemName);
    item.appendChild(itemInformation);
    item.appendChild(itemPrice);

    const getItem = () => item;
    return {
        getItem
    };
}