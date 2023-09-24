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
    return Square(false);
}