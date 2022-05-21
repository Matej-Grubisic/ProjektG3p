import "./styles1.css";
import Lista from "./List";
import ThemeContextProvider from "../Context/ThemeContext";
import ContextProvider from "../Context/Context";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Narucite() {
  return (
    <div className="App">
      <Header></Header>
      <ThemeContextProvider>
        <Navbar />
        <ContextProvider>
          <Lista />
        </ContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
      <Footer></Footer>
    </div>
  );
}
