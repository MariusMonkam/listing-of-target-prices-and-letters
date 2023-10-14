import React from "react";
import { Stock } from "../types/client-interfaces";
import styled from "@emotion/styled";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const StyledListItem = styled(ListItem)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  }
`;

const StockItem = ({ stock }: { stock: Stock }) => {
  return (
    <StyledListItem alignItems="center" divider>
      <ListItemText
        primary={stock.stock}
        secondary={`Target Price: ${stock.targetPrice}, Letter: ${stock.letter}`}
      />
    </StyledListItem>
  );
};

export default StockItem;
