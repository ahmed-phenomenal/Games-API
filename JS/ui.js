console.log("UI")

export class UI{
    displayDataGame(data){
        let gamesBox = ``;
        for(let i=0;i<data.length;i++){
            gamesBox+= `<div class="col-lg-3 col-sm-6 col-md-4 my-3"">
            <div class="card position-relative" data-id="${data[i].id}">
                <div class="p-3">
                    <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="card-title d-flex justify-content-between"><h2>${data[i].title}</h2><button>Free</button></div>
                        <p class="card-text" style="height:100px;overflow:hidden">${data[i].short_description}</p>
                        <hr>
                        <div class="details d-flex justify-content-between px-2 py-2 text-light">
                            <div style="background-color: #32383E;">${data[i].genre}</div>
                            <div style="background-color: #32383E;">${data[i].platform}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        }
        document.getElementById("demo").innerHTML = gamesBox
    }

    displayDescription(data){
        let content = `<div class="container">
        <h1 class="my-3" style="display: inline-block;">Details Game</h1>
        <button class="close" id="btnclose"><i class="fa-solid fa-xmark"></i></button>
        <div class="row">
            <div class="col-lg-4 col-md-5 col-sm-12">
                <img src="${data.thumbnail}">
            </div>
            <div class="col-lg-6 col-md-7 col-sm-12">
                <h2>Title: ${data.title}</h2>
                <p>Category: <span>${data.genre}</span></p>

                <p>Platform: <span>${data.platform}</span></p>
                
                <p>Status: <span>${data.developer}</span></p>

                <p style="width: 125%; font-size: 14px; line-height: 21px;">${data.description}</p>

                <a href="${data.freetogame_profile_url}" class="btn btn-outline-warning">Show Game</a>
            </div>
        </div>
        
    </div>`

    document.getElementById("description").innerHTML = content
    }
}