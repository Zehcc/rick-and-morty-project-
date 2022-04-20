import React, { useState } from "react";

const Form = ({ characters, setFilteredList }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const searchCharacter = (e, name) => {
    e.preventDefault();
    if (!name) {
      alert("Escribe algo!");
    } else {
      const filteredChar = characters.filter((character) =>
        character.name.toUpperCase().includes(inputValue.toUpperCase())
      );
      if (filteredChar.length) {
        setFilteredList(filteredChar);
      } else {
        alert(`${name} no existe`);
      }
      setInputValue("");
    }
  };

  return (
    <div className="finderDiv">
      <form onSubmit={(e) => searchCharacter(e, inputValue)}>
        <input
          onChange={handleInputChange}
          value={inputValue}
          type="text"
          placeholder="Escribe un personaje"
        />
      </form>
      <button onClick={() => setFilteredList([])}>Delete</button>
    </div>
  );
};

export default Form;
