import React from 'react'
import './Checkout.css'
import Subtotal from '../../Components/Checkout/Subtotal'
import Product from '../../Components/Checkout/Product'

function Checkout() {
  let storeItems = [
    {
      id:'1', 
      title: 'This may look silly at first sight: if we want to increment the count, why don\'t we just call', 
      price: 19.99, 
      image: 'https://www.cnet.com/a/img/resize/86c68ecf31095a661b70d267e927caa2d7ade3a0/hub/2017/10/20/13d920ec-faed-47cc-9484-6d5ef350885f/echo-2-product-photos-23.jpg?auto=webp&width=1200', 
      rating: 5
    },
    {
      id:'2', 
      title: 'This may look silly at first sight: if we want to increment the count, why don\'t we just call', 
      price: 19.99, 
      image: 'https://www.cnet.com/a/img/resize/86c68ecf31095a661b70d267e927caa2d7ade3a0/hub/2017/10/20/13d920ec-faed-47cc-9484-6d5ef350885f/echo-2-product-photos-23.jpg?auto=webp&width=1200', 
      rating: 1
    }
  ]
  return (
    <div className='checkout'>
      <div className="checkout__left" >
        <img className='checkout__ad' src='https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg' alt=''/>

        <div>
            <h2 className='checkout__title'>Your shoping Basket</h2>
            {storeItems.map((item) => <Product key={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} id={item.id} />)}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
