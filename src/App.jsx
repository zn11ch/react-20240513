import "./App.css";
import { restaurants } from "../materials/mock.js";
import { Restarunts } from "../components/restaraunts/component.jsx";
import { Header } from "../components/header/component.jsx";
import { Footer } from "../components/footer/component.jsx";
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
