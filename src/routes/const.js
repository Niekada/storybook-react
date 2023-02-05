import Products from "../pages/Products/Products";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";

export const HOME_PATH = "/";
export const PRODUCT_LIST_PATH = "/:category";

export const mainLayoutRoutes = {
    Layout: MainLayout,
    routes: [
        {
            path: HOME_PATH,  
            Component: Home,
        },
        {
            path: PRODUCT_LIST_PATH, 
            Component: Products,
        },
    ]
};

