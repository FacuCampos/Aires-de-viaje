import { BasketFill } from 'react-bootstrap-icons';

const CartWidget = () => {
  return (
    <div className='cartWidget-container'>
        <BasketFill className='cartWidget-icon'/>
        <strong>0</strong>
    </div>
  )
}

export default CartWidget