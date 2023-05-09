// https://dog.ceo/api/breeds/list/all
const listUrl = 'https://dog.ceo/api/breeds/list/all';
const select = document.getElementById('selectBreeds');
const options = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", () => {
    fetch(listUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let message = data.message;

            // needed to convert the object keys to an array for map to work
            let breeds = Object.keys(message);

            breeds.map(function(breed) {
                let option = document.createElement('option');

                option.innerHTML = breed;
                option.value = breed;

                options.appendChild(option);
            });

            select.appendChild(options);
        })
        .catch(function(error) {
            console.log(error);
        });
});

function breedSelected() {
    let selectedBreed = select.value;

    let url = 'https://dog.ceo/api/breed/' + selectedBreed + '/images/random';

    let doggo = getDoggo(url);
}

function getDoggo(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            let container = document.getElementById('imageContainer');

            // remove any existing children in the element
            container.innerHTML = '';

            let image = document.createElement('img');

            image.src = data.message;

            container.appendChild(image);
        })
        .catch(function(error) {
            console.log(error);
        });
}
<script> location.reload();</script>
