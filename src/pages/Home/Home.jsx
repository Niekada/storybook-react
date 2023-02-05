import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { GetUniqueArrayItems } from "../../utils/array";
import styled from "styled-components";
import ProductCategory from "./ProductCategory";

const Home = () => {
  const { products } = useContext(ProductContext);
  const uniqcategories = GetUniqueArrayItems(
    products.map((product) => product.type)
    );

    const categories = uniqcategories.map((category) => ({
      name: category, 
      image: products.find((product) => product.type === category).picUrl,
    }));

  return ( 
    <Container>
      <ProductContainer>
        {categories.map((category) => (
            <ProductCategory 
                key={category.name} 
                name={category.name} 
                image={category.image[0]}
            />
        ))}
      </ProductContainer>
    </Container>
  )
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
`


const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default Home;