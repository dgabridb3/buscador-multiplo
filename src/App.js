import "./styles.css";
import Image from "./city.gif";
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const OnClickButton = () => {
    window.open(
      `https://www.google.com/search?q=${value}&sxsrf=ALiCzsYgrQuit0prAGHSDleXBS58ej7SWg:1667913258824&source=lnms&tbm=isch&sa=X&ved=2ahUKEwirs7uK1Z77AhWxA7kGHY0kBHsQ_AUoAXoECAIQAw&biw=1600&bih=775&dpr=1`
    );
    window.open(
      `https://tatoeba.org/pt-br/sentences/search?from=eng&query=${value}&to=por`
    );
    window.open(`https://www.wordreference.com/enpt/${value}`);
    window.open(`https://pt.forvo.com/word/${value}#en`);

    setValue("");
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${Image})` }}>
      <div className="container">
        <h1>Buscador Múltiplo</h1>
        <input
          type="text"
          placeholder="digite a palavra"
          onChange={onChangeInput}
          value={value}
        />

        <button onClick={OnClickButton}>Pesquisar</button>
      </div>
    </div>
  );
}
