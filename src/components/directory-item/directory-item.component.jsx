import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
} from './directory-item.styles';

import {Link} from "react-router-dom";

const DirectoryItem = ({category}) => {
    const {imageUrl, title, route} = category;
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <Link to={route}>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </Link>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
