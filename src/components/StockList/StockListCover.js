import "./StockListCover.css";

function StockListCover(props) {
    return (
        <div className="stockListComponent">
            {props.children}
        </div>
    )
}
export default StockListCover;