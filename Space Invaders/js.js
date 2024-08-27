function drawBoard(){
    const gameElement = document.querySelector('.game')
    
    for(let i=0; i < 15*15; i++){
        const grid = document.createElement('div')
        grid.classList.add("grid")

        gameElement.append(grid)
    }
}

drawBoard()