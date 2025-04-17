import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
   // Puedes integrar estado global o contexto para cantidad real
   const quantity = Math.floor(Math.random() *10); // ejemplo aleatorio

   return (
     <div className="cart-widget">
       🛒 ({quantity})
     </div>
   );
};

export default CartWidget;