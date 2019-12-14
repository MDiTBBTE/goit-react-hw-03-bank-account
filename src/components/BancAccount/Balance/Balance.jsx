import React from 'react';
import PropTypes from 'prop-types';
import styles from './balance.module.css';
import calculateBalance from '../../../cauntFunctions/calculateBalance';
import calculateMount from '../../../cauntFunctions/calculateMountTypeFormTransactions';

const Balance = ({ transactions }) => (
  <section className={styles.balance}>
    <span>⬆{calculateMount(transactions, 'withdraw')}$</span>
    <span>⬇{calculateMount(transactions, 'deposit')}$</span>
    <span>Balance: {calculateBalance(transactions)}$</span>
  </section>
);

Balance.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Balance;
