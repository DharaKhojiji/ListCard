import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import CardList from "./Components/CardList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <CardList></CardList>
    </div>
  );
}

export default App;
