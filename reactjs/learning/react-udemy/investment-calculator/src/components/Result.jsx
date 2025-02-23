import Row from "./Row.jsx";
import Section from "./Section.jsx";
import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Result({ header,userInput }) {

  const amountData = calculateInvestmentResults(userInput)
  const initialInvestment = amountData[0].valueEndOfYear - amountData[0].interest - amountData[0].annualInvestment 

  return (
    <Section>
      <table id="result">
        <thead>
          <Row rowData={header}></Row>
        </thead>
        <tbody>
          {amountData.map((row, index) => {

            const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment
            const totalAmountInvested = row.valueEndOfYear - totalInterest

            return (
              <tr key={index}>
                <td className="center">{row.year}</td>
                <td className="center">{formatter.format(row.valueEndOfYear)}</td>
                <td className="center">{formatter.format(row.interest)}</td>
                <td className="center">{formatter.format(totalInterest)}</td>
                <td className="center">{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Section>
  );
}
