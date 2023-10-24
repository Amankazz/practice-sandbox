import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

const AddCard = () => {
  const { cardData, setCardData } = useContext(UserContext);
  const [data, setData] = useState({ id: "", todo: "", userId: "" });

  function changeHandler(e) {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
    console.log(data);
  }

  const clickHandler = () => {
    setCardData((prevCardData) => [...prevCardData, data]);
    console.log("xlicked");
  };

  useEffect(() => {
    console.log(cardData);
  }, [cardData]);

  return (
    <>
      <div> add card</div>
      <div className="todo-container">
        <div className="field">
          <label>ID: </label>
          <input
            type="text"
            name="id"
            value={data.id}
            onChange={changeHandler}
          />
        </div>
        <div className="field">
          <label>TODO: </label>
          <input
            type="text"
            name="todo"
            value={data.todo}
            onChange={changeHandler}
          />
        </div>
        <div className="field">
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={data.userId}
            onChange={changeHandler}
          />
        </div>
        <button onClick={clickHandler}>Add Card</button>
      </div>
    </>
  );
};

export default AddCard;
