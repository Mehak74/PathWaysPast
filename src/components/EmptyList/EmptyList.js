import React from 'react'
import './styles.css';
import e1 from '../../assests/13525-empty.gif';
const EmptyList = () => {
  return (
    <div className='emptylist-wrap'>
        <img src={e1} alt="empty" />
    </div>
  )
}

export default EmptyList