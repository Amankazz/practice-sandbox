import AddCard from "./components/AddCard";
import Cards from "./components/Cards";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import "./styles.css";

export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        {/* <Profile /> */}
        <hr />
        <AddCard />
        <Cards />
      </div>
    </UserContextProvider>
  );
}
