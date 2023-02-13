import { GetUniqueArrayItems } from "../../utils/array";
import styled from "styled-components";
import ProductCategory from "./ProductCategory";
import { useProducts } from "../../hooks/products";

const Home = () => {
  const { data, isLoading, error } = useProducts();
  const products = data || [];

  const uniqcategories = GetUniqueArrayItems(
    products.map((product) => product.type)
    );

    const categories = uniqcategories.map((category) => ({
      name: category, 
      image: products.find((product) => product.type === category).picUrl,
    }));

  if (isLoading) {
    return "Loading..."
  }

  if (error) {
    return "Product was not found";
  }

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