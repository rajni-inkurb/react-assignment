import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { registerForm } from "../store";
const RegistrationFormV2 = () => {
  const dispatch = useDispatch();

  // State to manage form values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(registerForm(formValues));
    setFormValues({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <Box
      component="form"
      sx={{
        width: "80%",
        mx: "auto",
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Registration Form2
      </Typography>

      <TextField
        required
        id="name"
        label="Name"
        variant="outlined"
        value={formValues.name}
        onChange={handleInputChange}
      />

      <TextField
        required
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        value={formValues.email}
        onChange={handleInputChange}
      />

      <TextField
        required
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        value={formValues.password}
        onChange={handleInputChange}
      />

      <TextField
        id="confirmPassword" // Change the id to match the state key
        label="Confirm Password"
        type="password"
        variant="outlined"
        value={formValues.confirmPassword}
        onChange={handleInputChange}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ m: 1, float: "right" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default RegistrationFormV2;
