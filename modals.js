// Открытие модального окна с изображением и описанием
function openModal(imgElement, title, description) {
    var modalImage = document.getElementById('modalImage');
    var modalDescription = document.getElementById('modalDescription');
    
    // Устанавливаем src изображения и описание
    modalImage.src = imgElement.src;
    modalDescription.innerText = description;

    // Устанавливаем заголовок модального окна
    document.getElementById('imageModalLabel').innerText = title;
}
