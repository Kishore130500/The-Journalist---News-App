document.querySelector("#form-submit").innerHTML = "Update";
 
export const fillForm = (id) => {
    const inputFields = document.querySelectorAll(".input-fields");
    [...inputFields].forEach(element => element.nam = "");
}