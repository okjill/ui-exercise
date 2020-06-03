const inputData =  {
  checking: [
    {
      label: 'Routing Number',
      name: 'routingNum',
      type: 'number'
    },
    {
      label: 'Bank Account Number',
      name: 'checkingAcctNum',
      type: 'number'
    },
    {
      label: 'Confirm Bank Account Number',
      name: 'confirmCheckingAcctNum',
      type: 'number'
    }
  ],
  debit: [
    {
      label: 'Card Number',
      name: 'cardNum',
      type: 'number'
    },
    {
      label: 'Name on Card',
      name: 'cardholderName',
      type: 'text'
    },
    {
      label: 'Expiration Date',
      name: 'expDate',
      type: 'month'
    },
    {
      label: 'CVV',
      name: 'cvv',
      type: 'number'
    }
  ],
  paymentType: 'checking',
  sharedInputs: [
    {
      label: 'Loan Account Number',
      name: 'loanAcctNum',
      type: 'number'
    },
    {
      label: 'Type of Account:',
      name: 'accountType',
      type: 'none'
    },
    {
      label: 'Checking',
      name: 'paymentType',
      type: 'radio',
      value: 'checking'
    },
    {
      label: 'Debit',
      name: 'paymentType',
      type: 'radio',
      value: 'debit'
    },
  ]
};

export default inputData;
