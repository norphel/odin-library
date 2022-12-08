const openModal = document.querySelector('.open-modal');
const addNewBook = document.getElementById('add-book-details');
const closeModal = document.querySelector('.close-modal');
openModal.onclick = () => {
    addNewBook.style.display = "block";
}
closeModal.onclick = () => {
    addNewBook.style.display = "none";
}