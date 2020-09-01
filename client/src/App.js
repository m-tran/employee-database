import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function findAllEmployees() {
  axios
    .get("/all")
    .then((response) => setEmployees(() => response.data))
    .catch((err) => console.log(err));
}

const rows = [];

function App() {
  const classes = useStyles();
  const allEmployees = findAllEmployees();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
