import { popUp } from "./popUp.js";

export const tm = () => {
document.querySelector("#form-submit").innerHTML = "Update";

let formData = {}

window.addEventListener('load', () => {
    formData = {
        title: "",
        date: "",
        author: "",
        image: "",
        description: ""
    }
});

//Collecting data in fields
const handleInputChange = (event) => {
    formData[event.target.name] = event.target.value;
};

const inputs = document.querySelector('#news-board');
inputs.addEventListener('change', handleInputChange);

//Submitting data
const handleSubmit = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);


    const options = {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
    }

    // "/" in beginning of the end point ensures that the request is made to the absolute path, from the root of the domain. 
    fetch(`${location.pathname}`, options)
        .then(response => {
            const inputFields = document.querySelectorAll(".input-fields");
            [...inputFields].forEach(element => element.value = "");
            popUp("done","Updated");
            console.log(response.body);

        })
        .catch(err => {
            popUp("close","updation");
            console.log(" 💥 Error : \n",err)});
};


const submitData = document.querySelector('#form-submit');
submitData.addEventListener('click', handleSubmit);
}