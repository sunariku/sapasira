const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const {
  getWSJF,
  createWSJF,
  deleteWSJF,
} = require("./controller/calculates.controller");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://root:224488@localhost:27017/wsjf?authSource=admin");

app.get("/wsjf", async (req, res) => {
  try {
    const response = await getWSJF();

    res.status(200).json({ data: response });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/wsjf", async (req, res) => {
  try {
    const { jobName, businessValue, timeCriticality, riskReduction, jobSize } =
      req.body;

    const wsjf = (businessValue + timeCriticality + riskReduction) / jobSize;

    const backlog = {
      jobName,
      businessValue,
      timeCriticality,
      riskReduction,
      jobSize,
      wsjf,
    };

    const response = await createWSJF(backlog);

    res.status(200).json({ data: response });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.delete("/wsjf/:id", async (req, res) => {
  try {
    const response = await deleteWSJF(req.params.id);

    res.status(200).json({ data: response });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(3000, () => console.log("Server Running"));
