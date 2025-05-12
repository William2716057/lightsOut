let gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((gridItem, index) => {
    gridItem.addEventListener('click', () => {

        toggleGridItem(gridItem);

        // Get indices for neighbors (above, below, left, right)
        const rowLength = 5; // 5 items per row

        // Check for item above (index - rowLength)
        if (index - rowLength >= 0) {
            const aboveItem = gridItems[index - rowLength];
            toggleGridItem(aboveItem);
        }

        // Check for item below (index + rowLength)
        if (index + rowLength < gridItems.length) {
            const belowItem = gridItems[index + rowLength];
            toggleGridItem(belowItem);
        }

        // Check the item to  left (index - 1), ensuring not the first column
        if (index % rowLength !== 0) {
            const leftItem = gridItems[index - 1];
            toggleGridItem(leftItem);
        }

        // Check for item to  right (index + 1), ensuring not the last column
        if ((index + 1) % rowLength !== 0) {
            const rightItem = gridItems[index + 1];
            toggleGridItem(rightItem);
        }
    });
});

// Function to toggle background image
// Will function currectly without fading 
//function toggleGridItem(gridItem) {
 //   if (gridItem.style.backgroundImage === 'linear-gradient(purple, white, purple)') {
 //       gridItem.style.backgroundImage = 'linear-gradient(purple, yellow, purple)';
//    } else {
//gridItem.style.backgroundImage = 'linear-gradient(purple, purple, purple)';
 //   }
//}

function toggleGridItem(gridItem) {
    const currentBg = getComputedStyle(gridItem).backgroundImage;

    const white = 'linear-gradient(purple, white, purple)';
    const yellow = 'linear-gradient(purple, yellow, purple)';

    if (currentBg.includes('white')) {
        gridItem.style.backgroundImage = yellow;
    } else {
        gridItem.style.backgroundImage = white;
    }
}