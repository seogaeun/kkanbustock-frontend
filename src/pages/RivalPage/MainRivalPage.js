import "./MainRivalPage.css";
import ViewScoreComponent from "./../../components/ViewScore/ViewScoreComponent";
import StockListComponent from "./../../components/StockList/StockListComponent";
import MyGroupComponent from "./../../components/MyGroup/MyGroupComponent.js";
import BlueLargeBtn from "../../components/ButtonComponent/BlueLargeBtn";

const stockDataList = [
    { profitRate: 1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },
    { profitRate: 1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },
    { profitRate: -1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },
    { profitRate: 0, stockName: "Unity Software", quantity: 22, purchasePrice: 2129 },
    { profitRate: 1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },

    // 다른 객체들도 여기에 추가 가능
];

function RivalPage() {
    return (
        <div className="RivalPageWrap">
            <ViewScoreComponent></ViewScoreComponent>
            <div className="ViewMyStockSection">
                <StockListComponent who="나" stockDataList={stockDataList} width="800px" height="100%"></StockListComponent>
                <BlueLargeBtn title="투자하러 가기"></BlueLargeBtn>
            </div>
            <MyGroupComponent></MyGroupComponent>
        </div>
    )
}
export default RivalPage;