import "./styles.css";

import Autocomplete from "./components/autocomplete";
import BasicTextFields from "./components/BasicTextFields";

export default function App() {
  return (
    <div className="App">
      <div className="component">
        <h3 className="componentName">Autocomplete</h3>
        <Autocomplete></Autocomplete>
      </div>
      <div className="component">
        <h3 className="componentName">BasicTextFields</h3>
        <BasicTextFields></BasicTextFields>
      </div>
    </div>
  );
}
