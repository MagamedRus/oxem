import React from "react";
import { useSelector } from "react-redux";
import { StyledH1 } from "../styledComponents/Headers";

function App() {
  useSelector((state) => state.input.price);

  return (
    <div className="App">
      <StyledH1>Рассчитайте стоимость автомобиля в лизинг</StyledH1>
    </div>
  );
}

export default App;
