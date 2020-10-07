import React from 'react';

import './collection-items.styles.scss';

const Collection = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image"
    style={{backgroundImage:`url(${imageUrl})`
    }}
    />
      <div className="collection-footer">

    </div>
  </div>
)