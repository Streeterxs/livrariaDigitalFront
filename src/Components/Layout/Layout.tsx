import React from 'react';

import Navbar from './Navbar';

import './Layout.scss';
import Aux from '../../Hoc/Aux';

const layout = (props: any) => (
    <Aux>
        <Navbar></Navbar>
        <div>
            <h3>Livraria Digital!</h3>
            <div>
                {props.children}
            </div>
        </div>
    </Aux>
);

export default layout;