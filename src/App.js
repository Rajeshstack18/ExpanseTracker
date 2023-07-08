import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import AmountItem from './components/AmountItem'

import './App.css'

const initialAmountList = [
  {
    id: uuidv4(),
    amount: 100,
  },
  {
    id: uuidv4(),
    amount: 500,
  },
  {
    id: uuidv4(),
    amount: 50,
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
      amount,
    }

    this.setState(prevState => ({
      amountList: [...prevState.amountList, newAmount],
      amount: '',
    }))
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
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
              <p className="heading2">Balance:550</p>

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
