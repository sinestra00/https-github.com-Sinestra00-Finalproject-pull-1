// https://dog.ceo/api/breeds/list/all
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('.breeds');

fetch(BREEDS_URL)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
    console.log(breedsArray);
  });

select.addEventListener('change', e => {
  let url = `https://dog.ceo/api/breeds/list/all${e.target.value}/images/random`;
  getDoggo(url);
});

const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

const getDoggo = url => {
  spinner.classList.add('show');
  img.classList.remove('show');
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      img.src = data.message;
    });
};

img.addEventListener('load', () => {
  spinner.classList.remove('show');
  img.classList.add('show');
})
  

<div>
              <canvas id="myChart"></canvas>
            </div>

<script src="https://dog.ceo/api/breeds/image/random"></script>           
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['hound-afghan', 'hound-basset', 'Ymexicanhairless', 'sheepdog', 'shihtzu', 'samoyed'],
    datasets: [{
      label: '# of dogs',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
</script>





