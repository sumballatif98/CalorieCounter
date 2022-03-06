import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const baseURL = "http://localhost:3500/caloriecounter";

export async function saveFood(title, calories) {
  const foodDate = new Date().toDateString();
  const request = {
    uuid: getUUID(),
    date: foodDate,
    food: { name: title, calories: calories },
  };
  const response = await axios.post(`${baseURL}/addFood`, request);
  // console.log(reponse.data);
  return response.data;
}

export async function saveExercise(title, calories) {
  const foodDate = new Date().toDateString();
  const request = {
    uuid: getUUID(),
    date: foodDate,
    exercise: { name: title, caloriesBurnt: calories },
  };
  const response = await axios.post(`${baseURL}/addExercise`, request);
  // console.log(reponse.data);
  return response.data;
}

export async function getFood() {
  const foodDate = new Date().toDateString();
  const params = {
    uuid: getUUID(),
    date: foodDate,
  };
  const response = await axios.get(`${baseURL}/getFood`, { params });
  return response.data;
}

export async function addGoal(goalCalories) {
  const foodDate = new Date().toDateString();
  const request = {
    uuid: getUUID(),
    date: foodDate,
    goal: goalCalories,
  };
  const response = await axios.post(`${baseURL}/addGoal`, request);
  // console.log(response.data);
  return response.data;
}

export function getUUID() {
  let uuid = localStorage.getItem("uuid");
  if (uuid) {
    return uuid;
  } else {
    uuid = localStorage.setItem("uuid", uuidv4());
    return uuid;
  }
}
