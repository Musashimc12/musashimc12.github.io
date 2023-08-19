const fox_result = document.getElementById('fox_result');
const fox_btn = document.getElementById('fox_btn');


fox_btn.addEventListener('click', getRandomFox)

function getRandomFox() {
    fetch('https://api.catboys.com/img')
    .then(res => res.json())
    .then(data => {
        fox_result.innerHTML = `<img src="${data.url}"/>` 
    })
    
}