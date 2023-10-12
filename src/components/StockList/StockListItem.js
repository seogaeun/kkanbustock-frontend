import "./StockListItem.css";
import SOL_happyEmoji from "./../../assets/icons/SOL_happyEmoji.png"
import SOL_sosoEmoji from "./../../assets/icons/SOL_sosoEmoji.png"
import SOL_sadEmoji from "./../../assets/icons/SOL_sadEmoji.png"



function StockListItem ({profitRate=1,stockName="Unity Software",quantity=22,purchasePrice=2183729}) {
    const upDownColor = profitRate > 0 ? "red" : profitRate == 0 ? "black" : "blue";
return(
<div className="StockListItem">
    <div className="ItemLeft">
    {profitRate > 0 ? (
        <img style={{ background: upDownColor }} alt="happy" src={SOL_happyEmoji} />
      ) : profitRate == 0 ? (
        <img alt="soso" src={SOL_sosoEmoji} />
      ) : (
        <img style={{ background: upDownColor }} alt="sad" src={SOL_sadEmoji} />
      )}
        <div className="title_col">
            <h2>{stockName}</h2>
            <p>{quantity} 주</p>
        </div>
    </div>
    <div className="ItemRight">
        <h2>{purchasePrice} 원</h2>
        <h3 style={{ color: upDownColor }}>{profitRate} %</h3>
    </div>

</div>
)

}
export default StockListItem;