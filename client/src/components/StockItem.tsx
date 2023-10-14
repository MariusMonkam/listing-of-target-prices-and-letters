import React from "react";
import { Stock } from "../types/client-interfaces";

interface StockItemProps {
  stock: Stock;
}

function StockItem({ stock }: StockItemProps) {
  return (
    <li>
      <strong>{stock.stock}</strong> - Target Price: {stock.targetPrice},
      Letter: {stock.letter}
    </li>
  );
}

export default StockItem;
