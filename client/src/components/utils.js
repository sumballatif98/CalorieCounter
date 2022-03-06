import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const baseURL = "http://localhost:3500/caloriecounter";

export async function saveFood(title, calories, date) {
  const request = {
    uuid: getUUID(),
    date: date,
    food: { name: title, calories: calories },
  };
  const response = await axios.post(`${baseURL}/addFood`, request);
  return response.data;
}

export async function saveExercise(title, calories, date) {
  const request = {
    uuid: getUUID(),
    date: date,
    exercise: { name: title, caloriesBurnt: calories },
  };
  const response = await axios.post(`${baseURL}/addExercise`, request);
  return response.data;
}

export async function getFood(date) {
  const params = {
    uuid: getUUID(),
    date: date,
  };
  const response = await axios.get(`${baseURL}/getFood`, { params });
  return response.data;
}

export async function addGoal(goalCalories, date) {
  const request = {
    uuid: getUUID(),
    date: date,
    goal: goalCalories,
  };
  const response = await axios.post(`${baseURL}/addGoal`, request);
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
