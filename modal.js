const openButton = document.getElementById('open');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.modal_overlay');
const closeBtn = modal.querySelector('.closeButton');
const addBtn = modal.querySelector('.addButton');
const actor = modal.querySelector('#actor');
const film = modal.querySelector('#film');
const imageAddress = modal.querySelector('#imageAddress');

function openModal(){
    modal.classList.remove('hidden');
}

function closeModal(event){
    event.preventDefault();
    modal.classList.add('hidden');
    actor.value = '';
    film.value= '';
    imageAddress.value = '';
}

function paintItem(newActor, newFilm, newImageAddress){
    const img = document.createElement('img');
    img.src = newImageAddress;

    const sidebarSpan = document.createElement('span');
    sidebarSpan.innerText = newActor;

    const containerSpan = document.createElement('span');
    containerSpan.innerText = newFilm;

    const div = document.createElement('div');
    div.className = 'card';
    div.appendChild(img);
    div.appendChild(containerSpan);
    
    const container = document.querySelector('.container');
    container.appendChild(div);

    const sidebar = document.querySelector('.sidebar');
    sidebar.appendChild(sidebarSpan);
    
    modal.classList.add('hidden');

    actor.value = '';
    film.value= '';
    imageAddress.value = '';
}

function addItem(event){
    event.preventDefault();
    const newActor = actor.value;
    const newFilm = film.value;
    const newImageAddress = imageAddress.value;
    paintItem(newActor, newFilm, newImageAddress);
}
closeBtn.addEventListener('click', closeModal);
addBtn.addEventListener('click', addItem);
openButton.addEventListener('click', openModal);
