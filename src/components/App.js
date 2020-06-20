/* global chrome */
import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const scriptCode = `(function() {
    let images = Array.from(document.querySelectorAll('img'));
    let srcArray =
         images.map((image) => {
           return image.currentSrc;
         });
    return srcArray
  })();`;

  chrome.tabs.executeScript({ code: scriptCode }, function (result) {
    setItems(result[0]);
  });
  return (
    <div className="App">
      <h1>Pic Party</h1>
      {items.length === 0 ? (
        <h3>images incoming</h3>
      ) : (
        items.map((item) => {
          return <img src={item} alt={item} />;
        })
      )}
    </div>
  );
}

export default App;
