import React from 'react';

function Board(props) {
  return <div className="grid-container">
    <div id="board">
      {props.images.map(image => (
        <div style={{ backgroundColor: image.color }} className="image grid-item" id={"image-" + image} key={image.index} onClick={() => { props.clickHandler(image.index) }} ></div>
      ))}
    </div>
  </div>
}

export default Board;