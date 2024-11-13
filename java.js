document.addEventListener('DOMContentLoaded', () => {
    const colorOptions = document.querySelectorAll('.color span');
    const shoeImage = document.getElementById('shoeImage');

    colorOptions.forEach(span => {
        span.addEventListener('click', () => {
            const newImage = span.getAttribute('data-image');
            shoeImage.src = newImage;
        });
    });
});
