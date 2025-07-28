const Calculate = require("../model/calculates.model");

async function getWSJF() {
  try {
    const response = await Calculate.find();

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getWSJFById($id) {
  try {
    const response = await Calculate.findById(id);

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function createWSJF(data) {
  try {
    const calculate = new Calculate(data);

    const response = await calculate.save();

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function updateWSJF(id, data) {
  try {
    const response = await Calculate.findByIdAndUpdate(id, data);

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function deleteWSJF(id) {
  try {
    const response = await Calculate.findByIdAndDelete(id);

    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getWSJF,
  getWSJFById,
  createWSJF,
  updateWSJF,
  deleteWSJF,
};
