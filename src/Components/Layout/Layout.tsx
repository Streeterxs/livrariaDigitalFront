import React from 'react';

import Navbar from './Navbar';

import './Layout.scss';
import Aux from '../../Hoc/Aux';

const layout = (props: any) => (
    <Aux>
        <Navbar></Navbar>
        <div className="container-fluid py-4 containerBackgroundColor">
            <div>
                {props.children}
            </div>
        </div>
    </Aux>
);

export default layout;