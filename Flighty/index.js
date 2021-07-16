console.log("Javscript Loaded!")
console.log("Test")

var PRIV_KEY = "a71510f2db263df44a60fb84f46b87953489b8e2";
var PUBLIC_KEY = "f9fc31ad0b30726cd49e8d2daa40ef6e"; 

//Linking API
fetch('https://swapi.dev/api').then(response => {
    return response.json()
})

fetch('https://swapi.dev/api/people/').then(response => response.json()).then(function (people){
        var nameCounter = 0
    people.results.forEach(person => {
        let div = document.createElement('div')
        div.textContent = person.name
        console.log(div)
        document.getElementById('characterName').appendChild(div)
        div.addEventListener("click", function(){ 
            var content = document.querySelector('.characterDetail')
            var text = content.innerText
            content.innerText = person.name + "'s hair is " + person.hair_color + " and their eye color is " + person.eye_color
            console.log(text)
        })
        nameCounter ++
    });
})

fetch('https://swapi.dev/api/planets/').then(response => response.json()).then(function (planets){
    planets.results.forEach(planet => {
        let div = document.createElement('div')
        div.textContent = planet.name
        console.log(div)
        document.getElementById('planetName').appendChild(div)
    });
})

//Prevent Reloading
  

  const getLike = document.querySelector('.like');
  const getLikeNum = document.querySelector('.likeNum')
  const inputBox = document.querySelector('.inputBox')
  const button = document.querySelector('.buttonForm')

  let like = 0;

  function likeClick(){
      var number = parseInt(getLikeNum.innerHTML)
      number ++
      console.log(number) 
      getLikeNum.innerHTML = number
  }

  function submitComment(){
      var list = document.querySelector('.commentList')
      var comment = document.querySelector('.inputBox').value
      document.querySelector('.inputBox').value = ""
    console.log(comment)
    var entry = document.createElement('li')
    entry.innerText = comment
    list.appendChild(entry)
  }

  console.log(document.querySelector('.like'))

  getLike.addEventListener(('click'), likeClick)

  button.addEventListener(('click'), submitComment)

