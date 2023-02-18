import styled from "styled-components";
import { euroSymbol } from "../../consts/currency";

const CartItem = ({ product }) => {
  
  return (
    <Container>
      <img 
        src={product.picUrl[0]}
        alt={product.name}
      />
      <div>
        <CartItemPrice>
          {euroSymbol}
          {product.price}
        </CartItemPrice>
        <p>
          {product.name}
        </p>
        <CartItemColor>
          {product.color}
        </CartItemColor>
      </div>
      <ItemQuantity>
        x{product.quantity}
      </ItemQuantity>
    </Container>
  )
};

const Container = styled.div`
    display: flex;
    
    img {
        width: 120px;
        margin-right: 8px;
        object-fit: contain;
    }
`;

const CartItemPrice = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-top: 16px;
    margin-bottom: 10px;
`;

const CartItemColor = styled.p`
    font-weight: 300;
    margin-top: 8px;
`;

const ItemQuantity = styled.div`
    flex: 1;
    align-self: center;
    margin-right: 48px;
    text-align: right;
`;

export default CartItem;