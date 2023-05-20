import { LordOfTheRings } from "../../src/index";

/**
 * Create an instance of the LordOfTheRings SDK client and make API requests.
 * @param {Object} config - The configuration object.
 * @param {string} config.apiKey - The API key for authorization.
 * @param {string} [config.apiClientUrl] - The base URL for the API client (optional).
 */

const loftrClient = new LordOfTheRings({
  apiKey: "RXpgoZuxCAXE48-tM-r-", // demo-api-key
  baseUrl: "https://the-one-api.dev/v2",
});

/**
 * Example usage: Fetches and logs the movies from the Lord of the Rings API.
 */
loftrClient.moviesApi.getMovies().then((response) => console.log(response));
loftrClient.moviesApi
  .getMovies({ limit: 1000, page: 1, offset: 3 })
  .then((response) => console.log(response));
