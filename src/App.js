import logo from './assets/investment-calculator-logo.png'
import MetricForm from './components/MetricForm'

function App() {
  let metricInputLabelData = [
    {
      id: 'current-savings',
      type: 'number',
      unit: '%',
      text: 'Current Savings',
    },
    {
      id: 'yearly-contribution',
      type: 'number',
      unit: '%',
      text: 'Yearly Savings',
    },
    {
      id: 'expected-return',
      type: 'number',
      unit: '%, per year',
      text: 'Expected Interest',
    },
    {
      id: 'duration',
      type: 'number',
      unit: 'years',
      text: 'Investment Duration',
    },
  ]

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = [] // per-year results

    let currentSavings = +userInput['current-savings'] // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution'] // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100
    const duration = +userInput['duration']

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      })
    }

    // do something with yearlyData ...
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <MetricForm metricInputLabelData={metricInputLabelData} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
