import React from 'react';

import {Add} from 'comp1';

const Comp2 = ({a, b}) =>
    <div>
        <strong>Comp2:</strong> <Add a={a} b={b}/>
    </div>

export default Comp2;
