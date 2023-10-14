import "./StockListCover.css";

function StockListCover(props, width) {
    return (
        <div className="stockListComponent" >
            {props.children}
        </div>
    )
}
export default StockListCover;