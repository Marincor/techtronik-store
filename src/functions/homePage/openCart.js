export default function openCart(cartIsOpen, funcOpenCart) {



    cartIsOpen ? funcOpenCart(false) : funcOpenCart(true);


    
  }