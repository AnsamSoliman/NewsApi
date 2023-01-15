const key = '328d82e1c614430cb23132c3f48a7798';
let api = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
let data = document.getElementById('data');
let articles=[];
async function getNewsData(){
    let res = await fetch(api);
    let data = await res.json();

    articles = data.articles;
    console.log(articles)
    display();
}

getNewsData()

function display(){
    let result = ``;
    let img='', description='';
    articles.forEach(aritcle=>{
        if (aritcle.urlToImage != null){
            img = aritcle.urlToImage;
        }else{
            img = 'default.jpg';
        }
        if (aritcle.description != null){
            description = aritcle.description;
        }else{
            description = 'description...';
        }
        result += `
        <div class="col-md-4">
            <div class="card p-2">
                <img src="${img}" alt="">
                <h2 class="fs-5">${aritcle.title}</h2>
                <p>${description}</p>
                <a href="${aritcle.url}">read more</a>
            </div>
        </div>
        `;
    })
    data.innerHTML = result;
}