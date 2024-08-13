import React from "react";
import { useSelector } from "react-redux";
import {Typography } from "@mui/material";
import FlowDiagram from "../components/FlowDiagram";
const RegistrationFormV1 = () => {
  const form = useSelector((state) => state.form);
  return (
    <>
    <Typography variant="body1" component="p" sx={{ mt: 2 }}>
        {JSON.stringify(form, null, 2)}
      </Typography>
      <FlowDiagram />
    </>
  );
};

export default RegistrationFormV1;
