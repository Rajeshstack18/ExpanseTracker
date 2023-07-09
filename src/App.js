import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'

import AmountItem from './components/AmountItem'

import './App.css'

const initialAmountList = [
  {
    id: uuidv4(),
    amount: 100,
    date: '2023-07-09',
  },
  {
    id: uuidv4(),
    amount: 500,
    date: '2023-07-09',
  },
  {
    id: uuidv4(),
    amount: -50,
    date: '2023-07-09',
  },
]

class App extends Component {
  state = {
    amountList: initialAmountList,
    amount: '',
  }

  onAddAmount = event => {
    event.preventDefault()
    const {amount} = this.state
    const newAmount = {
      id: uuidv4(),
      amount: Number(amount),
      date: format(new Date(), 'yyyy-MM-dd'),
    }

    this.setState(prevState => ({
      amountList: [...prevState.amountList, newAmount],
      amount: '',
    }))
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  getTotalAmount = () => {
    const {amountList} = this.state
    const totalAmount = amountList.reduce(
      (total, item) => total + item.amount,
      0,
    )
    return totalAmount
  }

  render() {
    const {amount, amountList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Expanse Tracker - Basic </h1>
          <div className="balance-container">
            <form
              className="contact-form-container"
              onSubmit={this.onAddAmount}
            >
              <h2>Total Amount: {this.getTotalAmount()}</h2>
              <input
                type="number"
                className="input"
                value={amount}
                onChange={this.onChangeAmount}
                placeholder="Amount"
              />
              <button type="submit" className="button">
                Add Amount
              </button>
            </form>
          </div>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Transaction</p>
            </li>
            {amountList.map(eachAmount => (
              <AmountItem key={eachAmount.id} amountDetails={eachAmount} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
