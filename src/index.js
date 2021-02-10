const url = 'http://localhost:3000/spiceblends'

function fetchAllSpices(){
    fetch(url)
    .then(response => response.json())
    // .then(spiceData => console.log(spiceData))
    .then(spiceData => spiceData.forEach(oneSpice => displayAllSpices(oneSpice)))
}

const imageDetail = document.querySelector('#spice-images')

function displayAllSpices(oneSpice){
    // console.log(oneSpice)
    const spiceImage = document.createElement('img')
    spiceImage.className = 'detail-image'
    spiceImage.dataset.id = oneSpice.id
    spiceImage.setAttribute("src", oneSpice.image)

    imageDetail.append(spiceImage)  
}

function fetchFirstSpice(){
    fetch(`${url}/1`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(spiceOne => displayFirstSpice(spiceOne))
}

const spiceDetail = document.querySelector('.detail-image')
// console.log(spiceDetail)
const title = document.querySelector('.title')

function displayFirstSpice(spiceOne){
    // console.log(spiceOne)
    spiceDetail.src = spiceOne.image
    spiceDetail.alt = spiceOne.title
    title.innerText = spiceOne.title
    updateForm.dataset.id = spiceOne.id
    spiceOne.ingredients.forEach(ingredient => ingredientsList(ingredient)) 
}

const ingredientul = document.querySelector('.ingredients-list')

function ingredientsList(ingredient){
    // console.log(ingredient)
    const ingredientLi = document.createElement('li')
    ingredientLi.dataset.id = ingredient.id
    ingredientLi.innerText = ingredient.name
    ingredientul.append(ingredientLi)
}

const updateForm = document.querySelector('#update-form')
updateForm.addEventListener('submit', updateBlend)

function updateBlend(event){
    event.preventDefault()
    // console.log(event)
    const spiceId = event.target.dataset.id
    const title = event.target.title.value
    const newTitle = {title}
    updatedImage(newTitle, spiceId)
}

function updatedImage(newTitle, id){
    fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(newTitle)
        
})
        .then(response => response.json())
        // .then(displayFirstSpice)
}

const newIngredientForm = document.querySelector("#ingredient-form")
newIngredientForm.addEventListener('submit', newIngredient)

function newIngredient(event){
    event.preventDefault()
    // console.log(event)
    const name = event.target.name.value
    const ingredientId = event.target.dataset.id

    newIngredient = {ingredientId, name}
    ingredientsList(newIngredient)


}

fetchAllSpices()
fetchFirstSpice()
// fetchSpiceIngredients()

