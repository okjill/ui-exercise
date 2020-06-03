import React from 'react';

// import './HelperImage.css';
import check from '../../assets/check.png';
import debit from '../../assets/debit.png';

class HelperImage extends React.Component {
  render = () => {
    let annotations, header, img;

    if (this.props.paymentType === 'checking') {
      annotations = ['Routing Number', 'Account Number'];
      header = 'Where can I find the routing and account number?';
      img = {src: check, alt: 'example check'};
    } else {
      header = 'Where can I find the CVV number?';
      img = {src: debit, alt: 'example back of debit card'};
    }

    return (
      <div className='helper-img-container'>
        <h3 className='helper-header'>{ header }</h3>
        <img className='helper-img' src={ img.src } alt={ img.alt }/>
      </div>
    );
  }
}

export default HelperImage;
