import { useContext, useEffect } from "react";
import data from "./data";
import UserContext from "../context/UserContext";

const Cards = () => {
  const { cardData, setCardData } = useContext(UserContext);

  return (
    <>
      <h1>Card</h1>
      <div className="card-container">
        {cardData.map((x, inx) => {
          return (
            <div className="card" key={inx}>
              <h2>{x.id}</h2>
              <p>
                <span>{x.todo}</span>
              </p>
              <p>user ID: {x.userId}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
