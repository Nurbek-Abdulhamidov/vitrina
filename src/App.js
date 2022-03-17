import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import ContextProvider from "./Context/context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
