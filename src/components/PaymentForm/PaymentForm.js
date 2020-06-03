import React from 'react';

import inputData from '../../inputData';

class PaymentForm extends React.Component {
  constructor() {
    super();

    this.state = { errorId: '', errorMsg: '', numRows: 5 };
  }

  buildInputs = () => {
    const { errorId, errorMsg } = this.state;
    const { paymentType } = this.props;

    const allInputs = inputData.sharedInputs.concat(inputData[paymentType]);

    return allInputs.map((input, i) => {
      let additionalProps;
      let className = 'form-input';
      let divClassName = 'form-row';
      let labelClassName = 'form-label';
      const error = errorId === `${paymentType}-input-${i}`
        ? errorMsg
        : '';

      if (input.type === 'radio') {
        additionalProps = {
          checked: paymentType === input.value,
          value: input.value
        };
        className = 'form-radio';
        divClassName = 'radio-wrapper';
        labelClassName = 'form-label-radio';
      } else if (input.name === 'loanAcctNum') {
        additionalProps = { autoFocus: true };
      } else if (input.name === 'accountType') {
        className = 'radio-container';
      }

      return (
        <div className={ divClassName } key={ i }>
          <label className={ labelClassName } htmlFor={ input.name }>{ input.label }</label>
          <input
            className={ className }
            id={ `${paymentType}-input-${i}` }
            name={ input.name }
            type={ input.type }
            required
            {...additionalProps}
            onChange={ this.handleChange.bind(this) }
          >
          </input>
          <div className='error'>{ error }</div>
        </div>
      );
    });
  }

  handleChange = e => {
    const input = e.target;

    if (input.name === 'paymentType') {
      this.props.handleChange(input.value);
    }

    if (this.isValid(input)) {
      this.setState({ [input.name]: input.value });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    // handle saved data as needed
  }

  isValid = input => {
    const errorId = input.id;
    if (input.name === 'routingNum' && input.value.length > 9) {
      this.setState({
        errorId,
        errorMsg: 'Routing number should be no longer than 9 digits.'
      });
      return false;
    } else if (input.name === 'cvv' && input.value.length !== 3) {
      this.setState({
        errorId,
        errorMsg: 'CVV should be exactly 3 digits.'
      });
      return false;
    } else if (input.name === 'confirmCheckingAcctNum') {
      console.log(document.getElementById('checkingAcctNum'));
      this.setState({
        errorId,
        errorMsg: 'CVV should be exactly 3 digits.'
      });
      return false;
    } else {
      this.setState({ errorId: '', errorMsg: '' });
      return true;
    }
  }

  render = () => {
    const inputs = this.buildInputs();

    return (
      <form className='form' onSubmit={ this.handleSubmit }>
        {inputs}
        <input className='input-submit' type='submit' value='MAKE PAYMENT' />
      </form>
    );
  }
}

export default PaymentForm;
