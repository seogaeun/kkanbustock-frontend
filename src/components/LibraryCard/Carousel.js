// import React, { Component } from 'react';
// import './Carousel.css';
// import LibraryCardItem from './LibraryCardItem';
// import axios from 'axios';


// class Carousel extends Component {

  
//   constructor(props) {
//     super(props);
//     this.state = {
//       dictionaryContents: [],
//       items: this.props.items,
//       activeIndex: this.props.active,
//     };
//   }

//   componentDidMount() {
//     this.searchApi();
//   }

//   searchApi() {
//     axios.get(url)
//       .then((response) => {
//         this.setState({ dictionaryContents: response.data });
//         console.log("성공");
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log("실패");
//         this.setState({ dictionaryContents:   {
//           title: "제목을 불러오지 못했습니다",
//           description: "설명도 불러오지 못했어요...",
//       } });
//       });
//   }

//   moveLeft() {
//     const { items, activeIndex } = this.state;
//     const newIndex = (activeIndex - 1 + items.length) % items.length;
//     const firstItem = items[0];
//     items.push(firstItem);

//     this.setState({
//       activeIndex: newIndex,
//     });

//     setTimeout(() => {
//       items.shift();
//       this.setState({ items });
//     }, 500);
//   }

//   moveRight() {
//     const { items, activeIndex } = this.state;
//     const newIndex = (activeIndex + 1) % items.length;
//     const lastItem = items[items.length - 1];
//     items.unshift(lastItem);

//     this.setState({
//       activeIndex: newIndex,
//     });

//     setTimeout(() => {
//       items.pop();
//       this.setState({ items });
//     }, 500);
//   }

//   render() {
//     const { dictionaryContents, items, activeIndex } = this.state;
    
//     return (
//       <div id="carousel" className="noselect">
//         <div className="arrow arrow-left" onClick={() => this.moveLeft()}>
//           <i className="fi-arrow-left"></i>
//         </div>
//         <div className="carousel-items">
//           {dictionaryContents.length > 0 && dictionaryContents.map((dictionaryContent) => (
//             <LibraryCardItem
//               key={dictionaryContent.id}
//               title={dictionaryContent.word}
//               description={dictionaryContent.explanation}
//             />
//           ))}
//         </div>
//         <div className="arrow arrow-right" onClick={() => this.moveRight()}>
//           <i className="fi-arrow-right"></i>
//         </div>
//       </div>
//     );
//   }
// }

// export default Carousel;
