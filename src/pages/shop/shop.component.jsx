import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
const ShopPage = ({collections})=>(
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </div>
)


export default ShopPage;