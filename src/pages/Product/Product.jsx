import { useParams } from "react-router"
import { useProducts } from "../../hooks/products";

const Product = () => {
    const { productId } = useParams();
    const { data } = useProducts();
    const products = data || [];

    const product = products.find((product) => 
        product.id === Number(productId)
    );

    if (!product) {
        return <div>Loading...</div>
    };

    return (
        <div>
            Product {product.name} 
        </div>
    );
};

export default Product