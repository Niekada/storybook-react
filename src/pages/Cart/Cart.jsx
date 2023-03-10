import { useContext } from "react";
import styled from "styled-components";
import { screenSize } from "../../consts/mediaQueries";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { LOGIN_PATH, CHECKOUT_PATH } from "../../routes/const";
import { UserContext } from "../../contexts/UserContext";
import CartItem from "./CartItem";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
    const { cartItems, handleUpdateQuantity } = useContext(CartContext);
    const { isLoggedIn } = useContext(UserContext);
    
  return (
    <Container>
        <Header>
            {cartItems.length
            ? (
            <>
                <h2>MY CART</h2>
                <p>Your items reserved for 30mins</p>
            </> 
            ) : (
            <h3>
                Your bag is empty
            </h3>
            )}

        </Header>
        <CartContainer>
            {cartItems.map((product) => (
            <CartItem 
                key={product.id} 
                product={product}
                handleIncreaseQuantity={() => 
                    handleUpdateQuantity(product.id, "increase")
                }
                handleDecreaseQuantity={() => 
                    handleUpdateQuantity(product.id)
                }
            />
            ))}
        </CartContainer>
        <ButtonContainer>
            {!!cartItems.length && (
                <Button 
                    as={Link} 
                    to={isLoggedIn ? CHECKOUT_PATH : LOGIN_PATH}
                >
                    CheckOut
                </Button>
            )}
        </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
    max-width: ${screenSize.tablet};
    margin: 0 auto;
`;

const CartContainer = styled.div`
  background-color: #ffffff;
  margin-bottom: 24px;
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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default Cart;