import styled from "styled-components";
import Select from "react-select";

import { useContext, useState } from "react";
import { useParams } from "react-router"
import { ProductContext } from "../../contexts/ProductContext";
import { capitalizeFirstLetter } from "../../utils/string";
import { GetUniqueArrayItems } from "../../utils/array";
import { screenSize } from "../../consts/mediaQueries";
import { lightBorderColor } from "../../consts/colors";

const Products = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const [ selectedColors, setSelectedColors ] = useState([]);

  const isCategory = (product) => product.type === category;
  const categoryProducts = products.filter(isCategory);

  const colors = categoryProducts.map(product => product.color);
  const uniqueColors = GetUniqueArrayItems(colors);
  const colorOptions = uniqueColors.map(color => ({
    value: color,
    label: capitalizeFirstLetter(color),
  }))

  const selectedColorsArray = selectedColors.map(color => color.value);
  const filteredByColorProducts = categoryProducts.filter(product => 
    selectedColorsArray.includes(product.color.toLowerCase())
  );

  const filteredProducts = filteredByColorProducts.lenght 
    ? filteredByColorProducts 
    : categoryProducts;

  return (
    <div>
      <FiltersContainer>
        <Filter>
          <Select 
            isMulti 
            name="color" 
            options={colorOptions} 
            value={selectedColors} 
            onChange={setSelectedColors}
          />
        </Filter>
      </FiltersContainer>
      <ProductsContainer> 
        {filteredProducts.map((product) => (
          <ProductItem key={product.id}>
            <img src={product.picUrl[0]} alt={product.name}/>
            <ProductProperty>
              {capitalizeFirstLetter(product.name.toLowerCase())}
            </ProductProperty>
            <ProductProperty style={{ color: "#B7ACA5"}}>
              €{product.price}
            </ProductProperty>
          </ProductItem>
        ))}; 
      </ProductsContainer>
    </div>
  );
};

const FiltersContainer = styled.div`
  padding: 40px 40px 0 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (min-width: ${screenSize.tablet}) and (max-width: ${screenSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  };
  @media (${screenSize.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  };
`;

const Filter = styled.div`
  margin-right: 24px
`

const ProductsContainer = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (min-width: ${screenSize.tablet}) and (max-width: ${screenSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  };
  @media (${screenSize.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  };
`;

const ProductItem = styled.div`
  margin-right: 24px;
  margin-bottom: 24px;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border: 1px solid ${lightBorderColor};
 
  img {
    flex: 1;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const ProductProperty = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  margin-left: 16px;
  padding-bottom: 8px;
`;

export default Products