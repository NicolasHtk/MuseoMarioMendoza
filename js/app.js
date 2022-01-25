const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const button = document.querySelector('.btn-up');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');



document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        // console.log(data)
        printCard(data)
    } catch (error) {
        console.log(error)
    }
}

const printCard = data => {
    data.forEach(product => {
        templateCard.querySelector('h5').textContent = product.title
        templateCard.querySelector('p').textContent = product.description
        templateCard.querySelector('img').setAttribute("src", product.thumbnailUrl)
        templateCard.querySelector('#btn-up').textContent = "Ver más"
        templateCard.querySelector('#btn-up').setAttribute("data-bs-target", product.modal)
        // templateCard.querySelector('#modal-title').textContent = product.title
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })

    cards.appendChild(fragment)
}




button.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', e => {
    // console.log(e);
    if (e.target.className === 'popup-wrapper') {
        popup.style.display = 'none';
    }
});