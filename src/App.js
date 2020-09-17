import React from "react";

import "./App.css";
import NavBar from "./components/navBar";

import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";

import Item from "./components/item";


function App() {


  return (
    <React.Fragment>
      
        <NavBar></NavBar>
          <div className="App container-fluid">
            <h1>Hello React</h1>

            <Item></Item>
         </div>
      

      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
