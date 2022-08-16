import { useState } from "react";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";
import NewForm from "./components/NewForm";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");

  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>

        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Advanced
        </h3>

        <h3
          onClick={() => setView("new")}
          style={{ color: view === "new" ? "#fff" : "" }}
        >
          New
        </h3>
      </nav>

      {view === "basic" && <BasicForm />}
      {view === "advanced" && <AdvancedForm />}
      {view === "new" && <NewForm />}
    </div>
  );
}

export default App;
