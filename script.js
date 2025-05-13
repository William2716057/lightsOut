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

function toggleGridItem(gridItem) {
    const currentBack = getComputedStyle(gridItem).backgroundImage;

    if (currentBack.includes('rgb(255, 255, 255)')) {
        // if square is yellow (on)
        gridItem.style.backgroundImage = 'linear-gradient(purple, yellow, purple)';
    } else {
        // if square is white (off)
        gridItem.style.backgroundImage = 'linear-gradient(purple, white, purple)';
    }
 
}

//function winCondition(gridItem) {
//    if (rowLength = 'linear-gradient(purple, white, purple)')
//    alert("You win!!!");

//}

function windConditions() {
    const allOff = Array.from(gridItems).every(item =>
        toggleGridItem(item).backGroundIamege.includes('rgb(purple, white, purple)',
        );

    if (allOff) {
        alert("You win");
    }
}