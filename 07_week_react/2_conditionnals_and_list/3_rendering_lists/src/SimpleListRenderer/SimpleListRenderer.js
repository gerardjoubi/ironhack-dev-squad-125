import React from 'react'
import "./SimpleListRenderer.css";

export default function SimpleListRenderer({ list, background }) { // destructuration of props here !
    const bg = background || "darkslategray"; // default operator => 
    // if background is falsy, use this default background
    return ( // returns a JSX expression (template :)
      <ul className="List">
        {list.map((val, i) => (
          <li className="item" key={i} style={{ background: (i + 1) % 2 === 0 ? bg : null }}>
            {val}
          </li>
        ))}
      </ul>
    );
}