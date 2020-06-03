import React from 'react';

import './App.css';

import HelperImage from '../HelperImage/HelperImage';
import PaymentForm from '../PaymentForm/PaymentForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = { paymentType: 'checking' };
  }

  handleChange = (paymentType, numRows) => {
    this.setState({ numRows, paymentType });
  }

  render = () => {
    return (
      <div>
        <h1>One-time Loan Payment</h1>
        <h3 className='subhead'>Fill out the form below to complete your payment.</h3>
        <div className='main-container'>
          <PaymentForm
            paymentType={ this.state.paymentType }
            handleChange={ this.handleChange.bind(this) }
          />
          <HelperImage paymentType={ this.state.paymentType }/>
        </div>
      </div>
    );
  }
}

export default App;
