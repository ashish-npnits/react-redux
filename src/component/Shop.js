import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state';

function Shop() {
    const dispatch = useDispatch();
  return (
    <div className='my-4'>
        <div className='my-4'>Deposit withdraw money</div>
      <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        Update Balance
      <button className='btn btn-primary mx-2'onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
    </div>
  )
}

export default Shop
