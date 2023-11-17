//Capitalize the text
export const capitalize = (authorName) => {
    let nameSplit = authorName.split(" ");
    nameSplit.forEach((item, index) => nameSplit[index] = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    return nameSplit.join(" ");
}

//Add a new button to the navbar
export const newButton = (id, content) => {
    const button = document.createElement("button");
    button.className = "buttons";
    button.innerHTML = content;
    const anchor = document.createElement("a");
    anchor.className = "temp-element";
    anchor.href = " ";
    anchor.id = id;
    anchor.appendChild(button);
    document.getElementById("navbar").appendChild(anchor);

} 

//Add a script
export const newScript = (path) => {
    const newElement = document.createElement("script");
    newElement.type = "module";
    newElement.src = path;
    newElement.className = "temp-element";
    document.body.appendChild(newElement);
};

//Add a style
export const newStyle = (path) => {
    const newElement = document.createElement("link");
    newElement.rel = "stylesheet";
    newElement.href = path;
    newElement.className = "temp-element";
    document.head.appendChild(newElement);
};

//Pop style and script
export const deleteScriptAndStyle = () => {
    const elements = document.querySelectorAll(".temp-element");
    const elementsArray = [...elements];
    elementsArray.forEach(element => element.parentNode.removeChild(element));
    console.log("Script n Style Deleted")
};