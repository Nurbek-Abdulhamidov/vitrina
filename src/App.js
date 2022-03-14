import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
