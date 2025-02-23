import Section from "./Section"
import InputGroup from "./InputGroup"
export default function UserInput({userInput,handleUserInput}){
    return <Section id="user-input">
    <div className="input-group">
      <InputGroup  value={userInput.initialInvestment} id="initialInvestment" onChange={handleUserInput}  label="INITIAL INVESTMENT"></InputGroup>
      <InputGroup  value={userInput.annualInvestment} id="annualInvestment" onChange={handleUserInput} label="ANNUAL INVESTMENT"></InputGroup>
    </div>
    <div className="input-group">
      <InputGroup value={userInput.expectedReturn} id="expectedReturn" onChange={handleUserInput} label="EXPECTED RETURN"></InputGroup>
      <InputGroup value={userInput.duration} id="duration" onChange={handleUserInput} label="DURATION"></InputGroup>
    </div>
  </Section>
}