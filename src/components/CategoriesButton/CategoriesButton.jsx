import styled from "styled-components";
import { useProducts } from "../../hooks/products";
import { GetUniqueArrayItems } from "../../utils/array";
import { Popover } from "react-tiny-popover";
import { useState,  } from "react";
import { Link, generatePath } from "react-router-dom";
import { lightBorderColor } from "../../consts/colors";
import { PRODUCT_LIST_PATH } from "../../routes/const";

const CategoriesButton = () => {
    const [hovered, setHovered] = useState(false);

    const { data } = useProducts();
    const products = data || [];

    const uniqCategories = GetUniqueArrayItems(
      products.map((product) => product.type)
    );

  return (
    <Popover
        isOpen={hovered}
        positions={["top", "bottom", "left", "right"]}
        onClickOutside={() => setHovered(false)}
        content={
            <CategoryContainer>
                {uniqCategories.map
                ((category) => (
                    <p key={category}>
                    <Link
                        to={generatePath(PRODUCT_LIST_PATH, { category })}
                    >
                        {category}
                    </Link>
                    </p>
                ))}
            </CategoryContainer>
        }
    >
        <Container 
            onMouseEnter={() => 
                setHovered(true)
            }
        >
            Categories
        </Container>
    </Popover>
  )
};

const Container = styled.p`
    font-size: 19px;
    cursor: pointer;
`;

const CategoryContainer = styled.div`
    height: 135px;
    background-color: #ffffff;
    border: 1px solid ${lightBorderColor};
    border-radius: 5px;
    width: 205px;
    margin-left: 24px;
    margin-top: 4px;

        p {
            padding-top: 8px;
            padding-left: 8px;
            font-size: 13px;
            text-transform: uppercase;
}`;

export default CategoriesButton;