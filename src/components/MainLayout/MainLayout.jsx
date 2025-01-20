/**@jsxImportSource @emotion/react */

import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import * as s from './style';

function MainLayout({ children }) {
    return (
        <div css={s.layout}>
            <MainHeader />
            { children }
        </div>
    );
}

export default MainLayout;
