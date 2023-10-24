import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import data from "../components/data";

function UserContextProvider({ children }) {
  const person = {
    name: "Mouni",
    age: 24
  };

  const [cardData, setCardData] = useState(data);

  const [player, setPlayer] = useState(person);

  useEffect(() => {
    setCardData;
  }, [cardData]);

  return (
    <UserContext.Provider value={{ player, setPlayer, cardData, setCardData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
