import React from 'react';

import CollectionItem from '../../components/collection-items/collection-items.component';

import './category.styles.scss';

const CategoryPage =({match}) =>{
    console.log(match);
    return(
<div className="category">
    <h2>CATEGORY PAGE</h2>
</div>
)};

export default CategoryPage;