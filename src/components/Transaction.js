import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function Transaction({ transaction }) {
    const  { deleteTransaction } = useContext(GlobalContext)


  const sign = transaction.amount < 0 ? '-': '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}Rs.{Math.abs(transaction.amount)}</span><button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button> 
        {/* Math.abs to keep amount positive */} 
    </li>
  )
}

export default Transaction