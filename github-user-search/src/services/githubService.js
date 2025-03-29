import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";
const USER_DETAILS_URL = "https://api.github.com/users";

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

    const response = await axios.get(`${BASE_URL}?q=${searchQuery}`);
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
    const response = await axios.get(`${USER_DETAILS_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
