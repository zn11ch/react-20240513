import "./App.css";
import { restaurants } from "../materials/mock.js";
import { Restarunts } from "./components/restaraunts/component";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
function App() {
  return (
    <>
      <Header />
      <Restarunts restaurants={restaurants} />
      <Footer />
    </>
  );
}

export default App;
