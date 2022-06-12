import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Brands from "./components/Brands";
import Products from "./components/Products";
import { Adduser } from "./components/Adduser";
import { Addbrand } from "./components/Addbrand";
import { Addproduct } from "./components/Addproduct";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<User />}></Route>
        <Route path="/brand" element={<Brands />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/adduser" element={<Adduser />}></Route>
        <Route path="/addbrand" element={<Addbrand />}></Route>
        <Route path="/addproduct" element={<Addproduct />}></Route>
      </Routes>
    </div>
  );
}
export default App;
