const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    aluno: "Mateus",
    curso: "Eng. de Software",
  });
});

app.get("/alunos", (req, res) => {
  res.status(200).json([
    {
      aluno: "Mateus",
      curso: "Eng. de Software",
    },
    {
      aluno: "Mateus",
      curso: "Eng. de Software",
    },
    {
      aluno: "Mateus",
      curso: "Eng. de Software",
    },
    {
      aluno: "Mateus",
      curso: "Eng. de Software",
    },
    {
      aluno: "Mateus",
      curso: "Eng. de Software",
    },
  ]);
});

app.listen(3000);
