import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state';
import { bindActionCreators } from 'redux';

function Shop() {
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className='my-4'>
        <div className='my-4'>Deposit withdraw money</div>
      <button className='btn btn-primary mx-2' onClick={()=>{withdrawMoney(100)}}>-</button>
        Update Balance
      <button className='btn btn-primary mx-2'onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
