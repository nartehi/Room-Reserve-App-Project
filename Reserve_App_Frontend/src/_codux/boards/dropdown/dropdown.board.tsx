import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Dropdown from '../../../components/dropdown.jsx';

export default createBoard({
    name: 'Dropdown',
    Board: () => <Dropdown isSearchable placeHolder onChange options />,
    isSnippet: true,
});
