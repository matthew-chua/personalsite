import NavBar from "./Layout/NavBar";
import { useState } from "react";

//components
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

//css

//material ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  const [tab, setTab] = useState(1);

  const changeTab = (tab) => {
    console.log("tab index", tab);
    setTab(tab);
  };
  return (
    <MuiThemeProvider>
      <NavBar changeTab={changeTab} />
      {tab === 1 && <Home />}
      {tab === 2 && <Projects />}
    </MuiThemeProvider>
  );
}

export default App;
