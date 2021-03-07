import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

class ShopPage extends React.component{
render(){
  const {match} = this.props;
  return(
    // ({match}) => (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview } />
        <Route  path={`${match.path}/:collectionId`}  component={CollectionPage} />
      </div>
    // );
  )
}
}


export default ShopPage;