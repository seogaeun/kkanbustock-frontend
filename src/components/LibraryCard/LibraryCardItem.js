import "./LibraryCardItem.css";

function LibraryCardItem({ title = "주식이란?", description = "어려운거다~~" }) {
  return (
    <div className="library-card">
        <div className="cardCaptionWrap">
            <div className="library-card-caption">
                <span class="library-card-tag library-card-main-tag">주식 백과사전</span>
                <span class="library-card-tag library-card-sub-tag">
                <span id="tag">Dictornary </span>Stock
                </span>
            </div>
        </div>

      
      <div className="library-card-content">
        <div className="library-card-title">{title}</div>
        <div className="library-card-description">{description}</div>
      </div>
      <div className="library-card-down-content">
        <div class="library-card-read-more">
          <span class="library-link__text">Read more</span>
        </div>
      </div>
    </div>
  );
}

export default LibraryCardItem;
