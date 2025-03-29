import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchUsers = async (username, location, minRepos) => {
  try {
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}?${query}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
