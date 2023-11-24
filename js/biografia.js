const events = document.querySelectorAll('.event');
const imagePopup = document.querySelector('.image-popup');
const popupImage = imagePopup.querySelector('img');
const closePopup = imagePopup.querySelector('.close-popup');

events.forEach(event => {
    event.addEventListener('click', () => {
        const imageUrl = event.getAttribute('data-image');
        popupImage.setAttribute('src', imageUrl);
        imagePopup.style.display = 'flex';
    });
});

closePopup.addEventListener('click', () => {
    imagePopup.style.display = 'none';
});
