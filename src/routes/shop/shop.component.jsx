import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useDispatch} from "react-redux";
import './shop.styles.scss';
import {useEffect} from "react";
import {fetchCategoriesStartAsync} from "../../store/categories/category.action";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStartAsync());
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}></Route>
            <Route path=":category" element={<Category/>}/>
        </Routes>

    );
};

export default Shop;
