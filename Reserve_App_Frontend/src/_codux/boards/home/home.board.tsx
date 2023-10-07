import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Home from '../../../components/Pages/home.jsx';

export default createBoard({
    name: 'Home',
    Board: () => <Home />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 640
    }
});
