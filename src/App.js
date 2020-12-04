import React from "react";
import "./App.css";
import Home from "./Componate/Home";
import About from "./Componate/About";
import Contact from "./Componate/Contact";
import NotFound from "./Componate/NotFound";
import Navbar from "./Componate/Navbar";
import Footer from "./Componate/Footer";
import UserForm from "./Componate/UserForm";
import UserEdit from "./Componate/UserEdit.jsx";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/user/add" component={UserForm} />
        <Route exact path="/user/edit/:id" component={UserEdit} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
