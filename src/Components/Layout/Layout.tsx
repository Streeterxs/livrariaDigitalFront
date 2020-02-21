import React from 'react';

import Aux from '../../Hoc/Aux';

const layout = (props: any) => (
    <Aux>
        <div>
            <h3>Livraria Digital!</h3>
            <div>
                {props.children}
            </div>
        </div>
    </Aux>
);

export default layout;