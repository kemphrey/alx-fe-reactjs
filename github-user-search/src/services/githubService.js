import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch GitHub users based on search query, location, and minimum repositories.
 * @param {string} query - The username search query.
 * @param {string} location - The user's location.
 * @param {number} minRepos - Minimum number of repositories.
 * @returns {Promise<Object>} - A promise that resolves to the API response.
 */
export const fetchUsers = async (query, location = "", minRepos = 0) => {
  try {
    let searchQuery = `${query}`;

    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos > 0) {
      searchQuery += `+repos:>${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}/search/users?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

/**
 * Fetch details of a specific GitHub user.
 * @param {string} username - The GitHub username.
 * @returns {Promise<Object>} - A promise that resolves to the user's details.
 */
export const fetchUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
