let formData = {}

window.addEventListener('load', () => {
    formData = {
        title: "",
        date: "",
        author: "",
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


    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
    }

    // "/" in beginning of the end point ensures that the request is made to the absolute path, from the root of the domain. 
    fetch('/api/v1/news', options)
        .then(response => {
            alert("✅ Successfully posted article");
            console.log(response.body);
            const inputFields = document.querySelectorAll(".input-fields");
            [...inputFields].forEach(element => element.value = "");
        })
        .catch(err => console.log(" 💥 Error : \n",err));
};

const submitData = document.querySelector('#form-submit');
submitData.addEventListener('click', handleSubmit);