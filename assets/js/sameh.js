window.addEventListener('load', equalizeProjectBlockHeights);
window.addEventListener('resize', equalizeProjectBlockHeights);

function equalizeProjectBlockHeights() {
    const rows = document.querySelectorAll('.items-container.row');
    
    rows.forEach(row => {
        let maxBlockHeight = 0;
        let maxContentHeight = 0;
        const blocks = row.querySelectorAll('.project-block-one');
        
        // Reset the height for all blocks and static-content
        blocks.forEach(block => {
            block.style.height = 'auto';
            const staticContent = block.querySelector('.static-content');
            if (staticContent) {
                staticContent.style.height = 'auto';
            }
        });
        
        // Find the maximum height in the current row for blocks and static-content
        blocks.forEach(block => {
            const staticContent = block.querySelector('.static-content');
            if (block.offsetHeight > maxBlockHeight) {
                maxBlockHeight = block.offsetHeight;
            }
            if (staticContent && staticContent.offsetHeight > maxContentHeight) {
                maxContentHeight = staticContent.offsetHeight;
            }
        });

        // Apply the maximum height to all blocks and static-content in the row
        blocks.forEach(block => {
            block.style.height = `${maxBlockHeight}px`;
            const staticContent = block.querySelector('.static-content');
            if (staticContent) {
                staticContent.style.height = `${maxContentHeight}px`;
            }
        });
    });
}