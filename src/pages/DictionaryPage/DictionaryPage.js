import React, {useState } from 'react';
import Header from "../../components/Header/Header";
import Carousel from "../../components/LibraryCard/Carousel copy";
import "./DictionaryPage.css"


function DictionaryPage() {

  return (
    <div className='dictonaryPageWrap'>
      <Header name="사전" />
      {/* <Carousel items={items} active={0} /> */}
      <div className="dictonaryContent">
          <Carousel/>
      </div>
    </div>
  );
} 

export default DictionaryPage;
