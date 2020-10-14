import React from "react";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">React Components Demo</h1>
          <p className="subtitle">Lazy Image</p>
          <Image
            placeholderImg="https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load"
            src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg"
          />
          <Image
            placeholderImg="https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+On+Error"
            src="https://doesnot.exits.com/image.png"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
