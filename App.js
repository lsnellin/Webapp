import React from "react";

function Square(isWhite) {
    let colorClass;
    if (isWhite) {
        return <button className='square light'></button>
    }
    else {
        return <button className='square dark'></button>
    }
}

export function Board() {
    const [squares, setSquares] = React.useState(Array(64).fill(null));

    let board = squares.map((item, index) => {
        if (index % 8 == 0) {

        }
        if (index % 2 == 0) {
            return Square(true);
        }
        else {
            return Square(false);
        }
    })

    return (
        <>
        <div class = 'grid'>
            {board}
        </div>
        </>
    );
}