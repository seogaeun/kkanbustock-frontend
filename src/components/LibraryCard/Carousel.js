import React, { Component } from 'react';
import './Carousel.css';
import LibraryCardItem from './LibraryCardItem'; // LibraryCardItem 컴포넌트를 불러옵니다.

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            activeIndex: this.props.active,
        };
    }

    moveLeft() {
        const { items, activeIndex } = this.state;
        const lastIndex = items.length - 1;
        const newIndex = (activeIndex - 1 + items.length) % items.length;

        const rotatedItems = items.slice();
        rotatedItems.unshift(rotatedItems.pop());

        this.setState({
            items: rotatedItems,
            activeIndex: newIndex,
        });
    }

    moveRight() {
        const { items, activeIndex } = this.state;
        const lastIndex = items.length - 1;
        const newIndex = (activeIndex + 1) % items.length;

        const rotatedItems = items.slice();
        rotatedItems.push(rotatedItems.shift());

        this.setState({
            items: rotatedItems,
            activeIndex: newIndex,
        });
    }

    render() {
        const { items, activeIndex } = this.state;
        return (
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={() => this.moveLeft()}>
                    <i className="fi-arrow-left"></i>
                </div>
                <div className="carousel-items">
                    {items.map((item, index) => (
                        <LibraryCardItem
                            key={index}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
                <div className="arrow arrow-right" onClick={() => this.moveRight()}>
                    <i className="fi-arrow-right"></i>
                </div>
            </div>
        );
    }
}

export default Carousel;
