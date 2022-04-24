import React, { FC } from "react";
import { Paper, Typography } from "@mui/material";
const Header: FC = () => {
  return (
    <Paper elevation={3}>
      <Typography component="h1" variant="h3">
        Simple Trello
      </Typography>
    </Paper>
  );
};

export default Header;
