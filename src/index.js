const url = 'http://localhost:3000/spiceblends'
const spiceurl = 'http://localhost:3000/ingredients'
const imageDetail = document.querySelector('#spice-images')


function fetchAllSpices(){
    fetch(url)
    .then(response => response.json())
    // .then(spiceData => console.log(spiceData))
    .then(spiceData => spiceData.forEach(oneSpice => displayAllSpices(oneSpice)))

}

function displayAllSpices(oneSpice){
    // console.log(oneSpice)
    const spiceImage = document.createElement('img')
    spiceImage.className = 'detail-image'
    spiceImage.dataset.id = oneSpice.id
    spiceImage.setAttribute("src", oneSpice.image)

    imageDetail.append(spiceImage)
    
}

function fetchFirstSpice(spice){
    fetch(`${url}/1`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(spiceOne => displayFirstSpice(spiceOne))
}

function fetchSpiceIngredients(ingredient){
    fetch(spiceurl)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(ingData => ingData.forEach(spice => displayFirstSpices(spice)))
}

const spiceDetail = document.querySelector('#spice-blend-detail')

function displayFirstSpice(spiceOne, spice){
    // console.log(spiceOne)
    // const ingredient = spice. 
    spiceDetail.dataset.id = spiceOne.id
    spiceDetail.innerHTML = `
    <img class="detail-image" src=${spiceOne.image} alt=${spiceOne.title} />
    <h2 class="title">${spiceOne.title}</h2>
    <div class="ingredients-container">
    <h4>Ingredients:</h4>
    <ul class="ingredients-list">
     
    </ul>

    `

}


fetchFirstSpice()
fetchAllSpices()