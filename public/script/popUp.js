export const popUp = (category, action) => {
    let text;
    category === "done" ? text = `Successfully ${action} Article` : text = `Failed to perform ${action}. Try again!`;
    let element = document.createElement("div");
    element.innerHTML = `
        <div id="pop-up">
            <span class="material-symbols-outlined md-48">
                ${category}
                </span><br>
            <h2 id="pop-up-head">${text}</h2>
            <button id="pop-up-button" type="button"> Done</button>
        </div>` 
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(element);
    const btn = document.getElementById("pop-up-button");
    btn.addEventListener("click",() => body.removeChild(element))
}