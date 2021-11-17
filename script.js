let fact= document.querySelector('.results')

let url=("https://cat-fact.herokuapp.com/facts/random/")
let  button = document.querySelector("#button")
button.addEventListener('click', fetchResults)

function fetchResults(e){
    fetch(url)
    .then (function (results){
        console.log(results)
        return results.json()
    })
    .then (function (json){
        (displayResults(json))
        console.log(json.text)
    })
}
function displayResults(json){
    fact.textContent= json.text;
}