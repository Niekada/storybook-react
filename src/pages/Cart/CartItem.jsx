import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import { euroSymbol } from "../../consts/currency";

const CartItem = ({ product, handleDecreaseQuantity, handleIncreaseQuantity }) => {
  
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
      <ItemQuantityContainer>
        <AiOutlineMinus 
          onClick={handleDecreaseQuantity}
        />
        <ItemQuantity>
          {product.quantity}
        </ItemQuantity>
        <AiOutlinePlus 
          onClick={handleIncreaseQuantity}
        />
      </ItemQuantityContainer>
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

const ItemQuantityContainer = styled.div`
  flex: 1;
  margin-right: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  user-select: none;

  svg {
    cursor: pointer;
  }
`;

const ItemQuantity = styled.p`
  fonst-size: 18px;
`

export default CartItem;