const homeCss= document.createElement("link");
homeCss.rel = "stylesheet";
homeCss.href = "../css/home.css";

const formJs = document.createElement("script");
formJs.src = "../script/form.js";

const formCss = document.createElement("link");
formCss.rel = "stylesheet";
formCss.href =  "../css/form.css";

const newsCard = `<div class="news-card">
<a href="/read"><h2>{%HEADING%}</h2></a>
<em class="news-date">{%DATE%}</em>
<em class="news-author">{%AUTHOR_NAME%}</em>
</div>`

const handleRoute = () => {
    const endpoint = window.location.hash.substring(1);
    console.log(endpoint);
    switch (endpoint) {

        case "/":
            document.head.appendChild(homeCss);
            break;

        case "/news/form":
            document.body.appendChild(formJs);
            document.head.appendChild(formCss);
            const formTemplate = `            
                <!--Form-->
                <div class="form-holder">
                    <form>
                        <div class="container">
                            <label for="author">Author</label>
                            <input type="text" name="author" class="input-fields" id="author-input">
                            <label for="date" id="date-label">Date</label>
                            <input type="date" name="date" class="input-fields" id="date-input">
                        </div>
                        <label class="clearfix" for="heading">Heading</label> <br>
                        <textarea name="title" class="input-fields" id=""></textarea><br>
                        <label for="content">Article</label><br><br>
                        <textarea name="description" class="input-fields" id="content-box"></textarea><br>
                        <button type="submit" id="form-submit">Submit</button>
                    </form>
                </div>
            `
            document.getElementById("news-board").innerHTML = formTemplate;
            break;

        case "/read":


    }

};

window.addEventListener("hashchange", handleRoute)