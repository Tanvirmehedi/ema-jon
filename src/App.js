import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header />
      <Shop></Shop>
      <Footer />
    </div>
  );
}

export default App;
