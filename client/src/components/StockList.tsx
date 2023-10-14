import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import StockItem from "./StockItem";
import { RootState, useAppDispatch } from "../store";
import { fetchTargetPrices } from "../app/features/stocks/stocksSlice";

function StockList() {
  const dispatch = useAppDispatch();
  const targetPrices = useSelector((state: RootState) => state.stocks.data);
  const status = useSelector((state: RootState) => state.stocks.status);
  const error = useSelector((state: RootState) => state.stocks.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTargetPrices());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Stock List</h2>
      <ul>
        {targetPrices.map((stock) => (
          <StockItem key={stock.stock} stock={stock} />
        ))}
      </ul>
    </div>
  );
}

export default StockList;
