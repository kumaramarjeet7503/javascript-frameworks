import Header from "./components/Header.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";
import UserInput from "./components/UserInput.jsx";

const TABLE_HEADERS = [
  "Year",
  "Investment Value",
  "Interest(Year)",
  "Total Interest",
  "Invested Capital",
];
const USER_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
  investedCapital: 10000
};

function App() {
  const [userInput, setUserInput] = useState(USER_INPUT);

  function isValidInput(){
    return userInput.duration >= 1 
  }

  function handleUserInput(e) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [e.target.id]: +e.target.value };
    });
  }

  return (
    <>
      <Header>Investment Calculator</Header>
      <UserInput
        userInput={userInput}
        handleUserInput={handleUserInput}
      ></UserInput>
      {isValidInput() ? <Result header={TABLE_HEADERS} userInput={userInput}></Result> :
        <p className="center">Please enter a correct duration for getting investment.</p>
      }
    </>
  );
}

export default App;
