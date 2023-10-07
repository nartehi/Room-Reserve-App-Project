import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { BereaCollege } from '../../../components/Pages/Colleges.jsx';

export default createBoard({
    name: 'BereaCollege',
    Board: () => <BereaCollege />,
    isSnippet: true,
});
