const loginButton = document.querySelector('.btn-light i.fa-user');
const modal = document.getElementById('loginModal');
const closeButton = document.querySelector('.close');

loginButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
