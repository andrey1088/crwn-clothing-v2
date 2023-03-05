import {useParams} from "react-router-dom";
import {useContext, useState, useEffect} from "react";
import ProductCard from "../../components/product-card/product-card.component";
import {CategoriesContext} from "../../contexts/categories.context";
import './category.styles.scss'

function Category(props) {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div className="category-container">
            {
                products && products.map((product) => {
                    return <ProductCard key={product.id} product={product}/>
                })
            }
        </div>
    );
}

export default Category;