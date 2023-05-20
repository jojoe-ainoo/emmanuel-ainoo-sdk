import { ApiClient } from "../common/api";
import * as types from "../common/types";

/**
 * API client for accessing movie-related endpoints.
 */
export class MoviesAPI extends ApiClient {
  /**
   * Retrieves a list of movies.
   * @returns A promise that resolves to the list of movies.
   */
  async getMovies(): Promise<types.Movie[]> {
    return this.get("/movie");
  }

  /**
   * Retrieves a movie by its ID.
   * @param id The ID of the movie.
   * @returns A promise that resolves to the movie with the specified ID.
   */
  async getMoviesById(id: string): Promise<types.Movie> {
    return this.get(`/movie/${id}`);
  }

  /**
   * Retrieves quotes for a movie by its ID.
   * @param id The ID of the movie.
   * @returns A promise that resolves to the quotes for the movie with the specified ID.
   */
  async getMovieQuotesById(id: string): Promise<types.Quote[]> {
    return this.get(`/movie/${id}/quote`);
  }
}
