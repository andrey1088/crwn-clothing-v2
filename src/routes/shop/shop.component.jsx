import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useDispatch} from "react-redux";
import './shop.styles.scss';
import {useEffect} from "react";
import {getCategoryAndDocuments} from "../../utils/firebase/firebase.utils";
import {setCategories} from "../../store/categories/category.action";

const Shop = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoryAndDocuments();
            dispatch(setCategories((categoriesArray)))
        }

        getCategoriesMap();

    }, [dispatch])
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}></Route>
            <Route path=":category" element={<Category/>}/>
        </Routes>

    );
};

export default Shop;
