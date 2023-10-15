import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Carousel from './components/LibraryCard/Carousel.js'
import LibraryCardItem from './components/LibraryCard/LibraryCardItem';
const root = ReactDOM.createRoot(document.getElementById('root'));

const items = [
    {
        title: "제목 1",
        description: "설명 1",
    },
    {
        title: "제목 2",
        description: "설명 2",
    },
    {
        title: "제목 3",
        description: "설명 3",
    },
    // 추가 아이템들...
];

root.render(<Carousel items={items} active={0} />);

