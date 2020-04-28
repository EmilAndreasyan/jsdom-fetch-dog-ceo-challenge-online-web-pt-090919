console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
  const imgUrl = "https://images.dog.ceo/breeds/groenendael/n02105056_3745.jpg"
  const dogImageContainer = document.getElementById("dog-image-container");
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => console.log(json))
  dogImageContainer.appendChild(imgUrl)
  
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dogBreeds = document.getElementById("dog-breeds")
  const li = document.createElement('li')
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => console.log(json))
  dogBreeds.appendChild(li)
  li.appendChild(breedUrl)
  
  li.addEventListener('click', (ev) => {
    ev.target.color = "yellow";
  })
})


