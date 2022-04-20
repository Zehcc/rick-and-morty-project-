import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import Character from "../../components/Character/Character";

const Finder = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [filterededList, setFilteredList] = useState([]);

  useEffect(() => {
    let numbers = [];
    for (let i = 1; i < 826; i++) {
      numbers = [...numbers, i];
    }
    axios("https://rickandmortyapi.com/api/character/" + numbers).then(
      (res) => {
        setAllCharacters(res.data);
      }
    );
  }, []);

  return (
    <div className="finderPage">
      <Form characters={allCharacters} setFilteredList={setFilteredList} />
      <ul>
        {filterededList.length ? (
          filterededList.map((character) => {
            return (
              <li key={character.id}>
                <Character character={character} />
              </li>
            );
          })
        ) : (
          <img
            className="bigImage"
            src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/06/rick-morty-2381623.jpg?itok=KBfLZ3O6"
            alt="finder"
          />
        )}
      </ul>
    </div>
  );
};

export default Finder;
