// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  denomination = value => {
    this.setState(prevState => ({
      count: prevState.count - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="container">
        <div className="app-container">
          <div className="name-container">
            <p className="letter">{initial}</p>
            <h1 className="name">{name}</h1>
          </div>
          <div className="in-rupees-container">
            <p className="your-balance-heading">Your Balance</p>
            <div>
              <p className="count">{count}</p>
              <p className="in-rupee">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul-container">
            {denominationsList.map(eachitem => (
              <DenominationItem
                details={eachitem}
                key={eachitem.id}
                denomination={this.denomination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
