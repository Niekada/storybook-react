 import styled from "styled-components";
 import { useNavigate, generatePath } from "react-router";
 import { PRODUCT_LIST_PATH } from "../../routes/const";

const ProductCategory = ({name, image}) => {
  const navigate = useNavigate();
  const productPath = generatePath(PRODUCT_LIST_PATH, {category: name});
  
  return (
    <ProductItem onClick={() => navigate(productPath)}>
      <div>
        <p>{name}</p>
        <p>13</p>
      </div>
      <img 
          src={image} 
          alt={name}
      />
    </ProductItem>
  );
};

const ProductItem = styled.div`
  width: 20%;
  text-transform: uppercase;
  background-color: #ffffff;
  margin: 16px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;

  &:hover {
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 16px;

    p {
      margin: 0;
    }
  }

  img {
    width: 100%;
  }
`;

export default ProductCategory