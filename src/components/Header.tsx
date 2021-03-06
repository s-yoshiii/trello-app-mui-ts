import React, { FC } from "react";
import { Paper, Typography } from "@mui/material";
const Header: FC = () => {
  return (
    <Paper elevation={3}>
      <Typography
        component="h1"
        bgcolor="primary.main"
        variant="h5"
        sx={{
          p: { xs: 2, md: 1 },
          color: "white",
          textAlign: "center",
          letterSpacing: 3,
          fontSize: { md: "h4.fontSize" },
          mb: 10,
        }}
      >
        Simple Trello
      </Typography>
    </Paper>
  );
};

export default Header;
