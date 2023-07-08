import './index.css'

const AmountItem = props => {
  const {amountDetails} = props
  const {amount} = amountDetails

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p className="mobile-no-value">Amount - {amount} </p>
      </div>
    </li>
  )
}

export default AmountItem
