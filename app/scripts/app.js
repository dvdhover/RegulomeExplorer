module React from 'react';
import {
    GridView
}
from './components/grid/GridView.react.js';

import {AssociationGridConfig} from './configs/Association.grid.js';

var data = [];
for (var i = 0; i < 500; i++) {
    data[i] = {
        FeatureA: 'gene ' + i,
        FeatureB: 'gene ' + i,
        logp: Math.round(Math.random() * 30 + 1),
        correlation: Math.random() > 0.2 ? Math.random().toFixed(3) : null,
        sampleSize: Math.round(Math.random() * 285 + 15),
        distribution: [ 9, 7, 1, 4]
    };
}

const render = () => React.renderComponent(
    new GridView({
        initialItems: data,
        config: AssociationGridConfig.getConfig(),
        headerRepeat: 30
    }),
    document.getElementById('content')
);


render();