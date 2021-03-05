
const { rejects } = require('assert');
const http = require('http');
const fetch = require('node-fetch');
const { resolve } = require('path');

const URL = "https://swapi.dev/api/people/"


function getPlanetforFirstSpeciesInFirstMovieForPerson(id){

    let url = URL + id + "/"

    let info = {}
    
    fetch(url)
    .then((data) => data.json())
    .then((person) => {
        info.name = person.name
        let filmUrl = person.films[0]
            fetch(filmUrl)
            .then((data) => data.json())
            .then((film) =>  {
                info.title = film.title;
                let specieUrl = film.species[0]
                fetch(specieUrl)
                .then((data) => data.json())
                .then((specie) => {
                    info.first_specie = specie.name
                    let worldUrl = specie.homeworld
                    fetch(worldUrl)
                    .then((data) => data.json())
                    .then((world) => {
                        info.homeworld = world.name
                        console.log(info)
                    })
                })

            })

    })

}

//getPlanetforFirstSpeciesInFirstMovieForPerson(1)


async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {

    let person = await fetch(URL + id).then(res => res.json()) 
    
    if (person.detail == "Not found") {
        throw Error("No person with that id")
    }
 
    let film = await fetch(person.films[0]).then(res => res.json()) 
    let specie = await fetch(film.species[0]).then(res => res.json()) 
    let homeworld =  await fetch(specie.homeworld).then(res => res.json()) 
   
return `Name: ${person.name}, Title: ${film.title}, Specie: ${specie.name}, Homeworld: ${homeworld.name} `
}

const test = async() => {

    try {
    let d = await getPlanetforFirstSpeciesInFirstMovieForPersonAsync(22)
    console.log(d)
    } catch(err) {
        console.log(err)
    }
}
test()