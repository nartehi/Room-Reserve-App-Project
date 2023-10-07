import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { AccraCollege } from '../../../components/Pages/Colleges.jsx';

export default createBoard({
    name: 'AccraCollege',
    Board: () => <AccraCollege />,
    isSnippet: true,
});
