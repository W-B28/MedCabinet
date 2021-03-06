import React from "react";
import "./App.css";
import AppHeader from "./components/Dashboard/appheader";
import DashNav from "./components/Dashboard/dashnav";
import AppFooter from "./components/Dashboard/appfooter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader />
      </header>
      <DashNav />
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
