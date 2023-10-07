import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { HarvardCollege } from '../../../components/Pages/Colleges.jsx';

export default createBoard({
    name: 'HarvardCollege',
    Board: () => <HarvardCollege />,
    isSnippet: true,
});
