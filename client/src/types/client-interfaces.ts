export interface Stock {
  stock: string;
  targetPrice: string;
  letter: string;
}

export interface ApiResponse {
  data: Stock[];
  status: number;
}

export interface StockItemProps {
  stock: Stock;
}
