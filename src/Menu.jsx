import React from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const menuItems = useSelector((state) => state.menu);

  const navigate = useNavigate();
  return (
    <>
      {menuItems.length > 0 && (
        <Box sx={{ width: "80%", margin: "auto" }}>
          <AppBar position="static">
            <Toolbar
              variant="dense"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {menuItems.map((item, idx) => (
                <Typography
                  variant="span"
                  color="inherit"
                  sx={{ marginRight: 2, cursor: "pointer" }}
                  key={idx}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </Typography>
              ))}
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
};
