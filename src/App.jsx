// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadApplication } from "./thunks";
import { Menu } from "./Menu";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  const dispatch = useDispatch();
  const LoadedApp = useSelector((state) => state.app);
  const loadAppVersion = (appName, menu) => {
    const appConfig = {
      name: appName,
      menu: menu,
    };
    dispatch(loadApplication(appConfig));
  };

  const config = [
    {
      appName: "RegistrationFormV1",
      menu: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Blog", path: "blog" },
      ],
    },
    {
      appName: "RegistrationFormV2",
      menu: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Register", path: "/register" },
      ],
    },
  ];
  return (
    <Router>
      <Menu />
      <Box
        sx={{
          display: "flex",
          width: "80%",
          margin: "auto",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        {config.map((val) => (
          <Card
            sx={{
              width: "40%",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: "#1976d2",
              color: "#ffff",
              fontWeight: "bold",
            }}
            variant="outlined"
            onClick={() => loadAppVersion(val.appName, val.menu)}
          >
            {val.appName}
          </Card>
        ))}
      </Box>

      <div style={{ marginTop: "50px" }}>
        {LoadedApp ? (
          <LoadedApp />
        ) : (
          <p style={{ textAlign: "center" }}>No application loaded.</p>
        )}
      </div>
    </Router>
  );
};

export default App;
