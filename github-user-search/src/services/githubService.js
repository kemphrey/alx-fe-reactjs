import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch GitHub user data based on search query.
 * @param {string} query - The search query (username, location, repo count).
 * @returns {Promise<Object>} - A promise that resolves to the API response.
 */
export const fetchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
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
