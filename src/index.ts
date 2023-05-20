import { MoviesAPI } from "./modules/movies";
import { QuotesAPI } from "./modules/quotes";

/**
 * The LordOfTheRings class provides access to the Lord of the Rings API endpoints for movies and quotes.
 */
export class LordOfTheRings {
  /**
   * The QuotesAPI instance for accessing the quotes API.
   */
  quotesApi: QuotesAPI;

  /**
   * The MoviesAPI instance for accessing the movies API.
   */
  moviesApi: MoviesAPI;

  /**
   * Constructs a new instance of LordOfTheRings.
   * @param {Object} config - The configuration object.
   * @param {string} config.apiKey - The API key for authorization.
   * @param {string} [config.apiClientUrl] - The base URL for the API client. Defaults to "https://the-one-api.dev/v2".
   */
  constructor(config: { apiKey: string; baseUrl?: string }) {
    this.quotesApi = new QuotesAPI(config);
    this.moviesApi = new MoviesAPI(config);
  }
}
