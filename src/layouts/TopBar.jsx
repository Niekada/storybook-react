import styled from "styled-components"
import { lightBorderColor } from "../consts/colors";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import { HOME_PATH, CART_PATH, LOGIN_PATH } from "../routes/const";
import { FaShoppingCart, FaSignOutAlt, FaSignInAlt } from "react-icons/fa"
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import CategoriesButton from "../components/CategoriesButton/CategoriesButton";


const TopBar = () => {
    const { isLoggedIn, handleLogout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClickSign = () => {
        if (isLoggedIn) {
            handleLogout()
            navigate(HOME_PATH);
            toast.success("Successfully logged out!");
        } else {
            navigate(LOGIN_PATH);
        }
    };

  return (
    <Container>
        <CategoriesButton />
        <Logo as={Link} to={HOME_PATH}>
            POHSE
        </Logo>
        <ItemContainer>
            <SearchBar />
            <Link to={CART_PATH}>
                <FaShoppingCart 
                    fontSize={20} />
            </Link>
            <SignOut
                onClick={handleClickSign}
            >
                {isLoggedIn ? (
                    <FaSignOutAlt 
                        fontSize={20}
                    />
                ) : (
                    <FaSignInAlt
                        fontSize={20}
                    />
                )}
            </SignOut>
        </ItemContainer>
    </Container>
  )
};

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Container = styled.div`
    padding: 6px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${lightBorderColor};
    background-color: #ffffff;
`;

const Logo = styled.div`
    font-weight: 700;
    font-size: 28px;
    text-decoration: none;
    color: inherit;
`;

const SignOut = styled.div`
    cursor: pointer;
`;

export default TopBar