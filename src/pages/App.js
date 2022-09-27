import React from "react";
import { useSelector } from "react-redux";
import PriceRangeInput from "../components/PriceRangeInput";
import { NekstBlackH1 } from "../styledComponents/Headers";

function App() {
  useSelector((state) => state.input.price);

  return (
    <div className="App">
      <NekstBlackH1>Рассчитайте стоимость автомобиля в лизинг</NekstBlackH1>
      <PriceRangeInput />
    </div>
  );
}

export default App;
