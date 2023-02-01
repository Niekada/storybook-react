import Products from "../pages/Products/Products";
import Home from "../pages/Home/Home";

export const HOME_PATH = "/";
export const PRODUCT_LIST_PATH = "/:category";
// export const PRODUCT_LIST_PATH1 = `${HOME_PATH}:category`;
// export const PRODUCT_LIST_PATH12 = `${PRODUCT_LIST_PATH1}:itemId`;

export const routes = [
    {
        path: HOME_PATH,  
        Component: Home,
    },
    {
        path: PRODUCT_LIST_PATH, 
        Component: Products,
    },
];