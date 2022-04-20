import axios from "axios";
import React, { useState, useEffect } from "react";
import Character from "../../components/Character/Character";
import Buttons from "../../components/Buttons/Buttons";
import { useAvatarContext } from "../../context/AvatarContext/AvatarContext";
import {
  AiFillStar as AvatarBtn,
  AiOutlineStar as NoAvatarBtn,
} from "react-icons/ai";

const Characters = () => {
  const [counter, setCounter] = useState(1);

  const url = `https://rickandmortyapi.com/api/character?page=${counter}`;

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios(url).then((res) => {
      setCharacters(res.data.results);
    });
  }, [url]);

  const nextPage = () => {
    setCounter(counter + 1);
  };

  const previousPage = () => {
    setCounter(counter - 1);
  };

  const { avatar, changeAvatar } = useAvatarContext();

  return (
    <div className="charactersPage">
      <div className="topButtons">
        <Buttons
          counter={counter}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
      <ul>
        {characters &&
          characters.map((character) => {
            return (
              <li key={character.id}>
                <Character character={character} />
                {avatar.image === character.image ? (
                  <AvatarBtn
                    color="yellow"
                    size={30}
                    onClick={() => changeAvatar(character)}
                  >
                    Elegir avatar
                  </AvatarBtn>
                ) : (
                  <NoAvatarBtn
                    color="yellow"
                    size={30}
                    onClick={() => changeAvatar(character)}
                  >
                    Elegir avatar
                  </NoAvatarBtn>
                )}
              </li>
            );
          })}
      </ul>
      <div className="botButtons">
        <Buttons
          counter={counter}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
    </div>
  );
};

export default Characters;
