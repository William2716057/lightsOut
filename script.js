let gridItems = document.querySelectorAll('.grid-item');


gridItems.forEach((gridItem, index) => {
    gridItem.addEventListener('click', () => {
   
        if (gridItem.style.backgroundImage === 'linear-gradient(purple, white, purple)') {
            gridItem.style.backgroundImage = 'linear-gradient(purple, yellow, purple)';
        } else {
            gridItem.style.backgroundImage = 'linear-gradient(purple, white, purple)';
        }


        if (index >= 5) {  
            const aboveItem = gridItems[index - 5];
           
            if (aboveItem.style.backgroundImage === 'linear-gradient(purple, white, purple)') {
                aboveItem.style.backgroundImage = 'linear-gradient(purple, yellow, purple)';
            } else {
                aboveItem.style.backgroundImage = 'linear-gradient(purple, white, purple)';
            }
        }
    });
});