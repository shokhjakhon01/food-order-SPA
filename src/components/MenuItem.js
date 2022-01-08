import React from 'react';

function MenuItem({image, name, price}) {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
        <div className='descr'>
        <span>{name}</span>
        <span>{price} sum</span>
        </div>
    </div>
  );
}

export default MenuItem;