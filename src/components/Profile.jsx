import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { player, setPlayer, cardData, setCardData } = useContext(UserContext);

  console.log(player);

  const [temp, setTemp] = useState({ name: "", age: "" });

  function changeHandler(e) {
    const { name, value } = e.target;
    setTemp((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function clickHandler() {
    setPlayer(temp);
  }

  // useEffect(()=>{
  //   setPlayer(temp);
  // }, [temp]);

  return (
    <div>
      <p>This is {player.name}</p>
      <p>Age is {player.age}</p>
      <div>
        <label>name </label>
        <input
          placeholder="name"
          name="name"
          value={temp.name}
          type="text"
          onChange={changeHandler}
        />

        <label>age </label>
        <input
          placeholder="age"
          name="age"
          value={temp.age}
          type="text"
          onChange={changeHandler}
        />
      </div>
      <button onClick={clickHandler}>Update</button>
    </div>
  );
};

export default Profile;
