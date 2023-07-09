import './index.css'

const AmountItem = props => {
  const {amountDetails} = props
  const {amount, date} = amountDetails
  const currentTime = new Date()
  const time = currentTime.toLocaleTimeString()

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p className="mobile-no-value">Amount : {amount} </p>
        <p className="mobile-no-value">{date}</p>
        <p className="mobile-no-value">{time}</p>
      </div>
    </li>
  )
}

export default AmountItem
