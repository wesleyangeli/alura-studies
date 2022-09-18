import { useState } from "react";
import Botao from "./components/Botao/idex";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Botao />
    </div>
  );
}

export default App;
