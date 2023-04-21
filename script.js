let timer
let deleteFirstPhotoDelay

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://dog-breeds2.p.rapidapi.com/dog_breeds",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
		"X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

start()

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
  <select onchange="loadByBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList).map(function (breed) {
          return `<option>${breed}</option>`
        }).join('')}
      </select>
  `
}

async function loadByBreed(breed) {
  if (breed != "Choose a dog breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json()
    console.log(data.message[0])
       document.getElementById("slideshow").innerHTML =
         `<img src="${data.message[0]}" alt="Italian Trulli">`
  }
}







