import axios from "axios";

//get all users from db.json using json-server
const getAllUsers = () => {
  return axios.get("http://localhost:3000/users");
};

export { getAllUsers };
