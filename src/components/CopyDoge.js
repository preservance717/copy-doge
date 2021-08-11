import React from "react";

import { styles } from "../style.js";
import quiteDoge from "../assets/images/quiteDoge.png";
import copyDoge from "../assets/images/copyDoge.jpeg";

const images = {
  copyDoge: copyDoge,
  quiteDoge: quiteDoge,
}

const CopyDoge = ({name, value, isCopying, handleChange, toggleTape}) => {
  return <div style={styles.divStyles}>
    <h1 style={{ marginBottom: 80 }}>Copy Cat { name || 'Doge'}</h1>
    <input type="text" value={value} onChange={handleChange}/>
    <img 
      src={isCopying ? images.copyDoge : images.quiteDoge} 
      alt={isCopying ? "copydoge" : "quietdoge"} 
      onClick={toggleTape}
      style={styles.imgStyles}
      data-testid="cat-image"
    />
    <p data-testid="copied-text">{isCopying && value}</p>
  </div>
};

export default CopyDoge;