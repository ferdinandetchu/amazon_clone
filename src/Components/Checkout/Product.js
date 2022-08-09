import React from 'react'
import './Product.css'


function Product({ title, image, price, rating, id}) {

    // const [state, dispach] = useStateValue;

    // const addToBasket = () => {
    //     dispach the item into the data layer
    //     dispach({
    //         type: 'ADD_TO_BASKET',
    //         item: {
    //             id: id,
    //             title: title,
    //             image: image,
    //             price: price,
    //             rating: rating
    //         }
    //     })
    // } 

  return (
    <div className='product'>
      <img 
        src={image}
        alt='' />
      <div className='product__info'>
        <p>
            {title}
        </p>

        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>

        <div className='product__rating'>
            {Array(rating).fill().map((_, i) => (
                <p key={i}>&#9733;</p>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  )
}

export default Product
