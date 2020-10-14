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
            style={{ width: 400, height: 300 }}
            placeholderImg="https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load"
            src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg"
          />
          <br />
          <Image
            errorImg="https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"
            placeholderImg="https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load"
            src="https://doesnot.exits.com/image.png"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
