import styled from "styled-components";
import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";
import { euroSymbol } from "../../consts/currency";
import { screenSize } from "../../consts/mediaQueries";
import Button from "../../components/Button/Button";

const Cart = () => {
    const { products } = useContext(ProductContext);

    const cartProducts = products.slice(0, 2);
    console.log(cartProducts);


  return (
    <Container>
        <Header>
            <h2>MY CART</h2>
            <p>Your items reserved for 30mins</p>
        </Header>
        <CartContainer>
            {cartProducts.map((product) => 
                <CartItem key={product.id}>
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
                </CartItem>
            )}
        </CartContainer>
        <ButtonContainer>
            <Button>
                CheckOut
            </Button>
        </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
    max-width: ${screenSize.tablet};
    margin: 0 auto;
`;

const Header = styled.div`
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 4px;
    margin-bottom: 24px;

    h2, p {
        margin:0
    }
`;

const CartContainer = styled.div`
    background-color: #ffffff;
    margin-bottom: 24px;
`;

const CartItem = styled.div`
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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export default Cart;