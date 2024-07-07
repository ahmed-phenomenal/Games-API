console.log("Details")

import {UI} from "./ui.js"
let description = document.getElementById("description")
let loading = document.getElementById("loading")
export class Details{
    constructor(id){
        this.ui = new UI()
        this.getDetails(id)
    }
    async getDetails(id){
        loading.classList.add("d-none")
        description.classList.remove("d-none")

        let options = {
            method: "GET",
            headers: {
            "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };
    
        let api = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
            options
            
        );
        let response = await api.json();
        console.log(response);

        new UI().displayDescription(response)
        document.getElementById("btnclose").addEventListener("click",() => {
            description.classList.add("d-none")
            loading.classList.remove("d-none")
        })
    }
}