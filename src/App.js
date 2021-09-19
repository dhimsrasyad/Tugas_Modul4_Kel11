import { React } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import input1 from "./input/input1";
import Profile from "./useContext/context";
import Index from "./product/index";
import counter from "./home/counter";
import warna from './useEffect/UseEffect';
import home from "./home/home";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header className="navv">
          <div className="title" style={{ marginLeft: "5em" }}>
            <p>Tugas Modul 4</p>
          </div>
          <nav style={{ float: "right", position: "relative", bottom: "2.5em", marginRight: "5em", }} className="right">
            <Link className="text" to="/home">Home</Link>
            <Link className="text" to="/counter">Counter</Link>
            <Link className="text" to="/input">Input</Link>
            <Link className="text navtext2" to="/profile">Profile Dhimas</Link>
            <Link className="text" to="/Effect">Effect</Link>
            <Link className="text" to="/Warna">Warna</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/home" exact component={home} />
          <Route path="/input" exact component={input1} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/Effect" exact component={Index} />
          <Route path="/counter" exact component={counter} />
          <Route path="/Warna" exact component={warna} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
