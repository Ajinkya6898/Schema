import logo from "./logo.svg";
import "./App.css";
import { Adduser } from "./components/Adduser";
import User from "./components/User";
import Brands from "./components/Brands";
import { Addbrand } from "./components/Addbrand";
import Products from "./components/Products";
import { Addproduct } from "./components/Addproduct";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <User />
      <Adduser />
      <Brands />
      <Addbrand />
      <Products />
      <Addproduct />
    </div>
  );
}

export default App;
