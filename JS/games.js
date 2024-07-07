console.log("games")

import { Details } from "./details.js";
import { UI } from "./ui.js";

export class Games{
    constructor(){

        this.loading = document.getElementById("loading")
        this.description = document.getElementById("description")
        // variables
        let links = document.querySelectorAll('.nav-link');
        let category = "mmorpg"
        this.getGames("mmorpg")
        // Function to handle the click event
        links.forEach(link => {
        link.addEventListener('click', () => {
                links.forEach(link => link.classList.remove('active'));
                event.currentTarget.classList.add('active');
                category = link.getAttribute("data-attribute")
                console.log(category)
                this.getGames(category)
            });
        });

        this.ui = new UI()


    }
    async getGames(categry = "mmorpg"){
        let options = {
            method: "GET",
            headers: {
            "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };
    
        let api = await fetch(
            ` https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categry}`,
            options
        );
        let response = await api.json();
        console.log(response);
        this.ui.displayDataGame(response);


        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener('click' , () => {
                this.description.classList.remove("d-none")
                this.loading.classList.add("d-none")
                let ids = card.getAttribute("data-id")
                new Details(ids)
                console.log("clicked")
            })
        })
    }
//     start(){
//         document.querySelectorAll(".card").forEach((item) => {
//             item.addEventListener("click", () => {
//                 const id = item.dataset.id;
//                 this.showDetails(id);
//             });
//         });
//     }
//     showDetails(idgame) {
//         let details = new Details(idgame);
//         document.getElementById("loading").classList.add("d-none");
//         document.getElementById("description").classList.remove("d-none");
//     }
// }
}
