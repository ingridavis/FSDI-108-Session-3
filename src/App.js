import React from "react";

import "./App.css";
import NavBar from "./components/navBar";
import QuantityPicker from "./components/quantityPicker";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/todo";


function App() {


  return (
    <React.Fragment>
      
        <NavBar></NavBar>
        <div className="App container-fluid">
        <h1>Hello React</h1>

        <QuantityPicker></QuantityPicker>
      </div>
      <Todo></Todo>

      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
