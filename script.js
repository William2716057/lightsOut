let gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        if (gridItem.style.backgroundImage === 'linear-gradient(purple, white, purple)') {
            gridItem.style.backgroundImage = 'linear-gradient(purple, yellow, purple)';
        } else {
            gridItem.style.backgroundImage = 'linear-gradient(purple, white, purple)';
        }
    });
});