import { ApiClient } from "../common/api";
import * as types from "../common/types";

/**
 * API client for accessing movie-related endpoints.
 */
export class MoviesAPI extends ApiClient {
  /**
   * Retrieves a list of movies.
   * @param pagination The pagination configuration.
   * @returns A promise that resolves to the list of movies.
   */
  async getMovies(pagination?: types.Pagination): Promise<types.Movie[]> {
    const params: Record<string, any> = {};
    if (pagination) {
      if (pagination.limit) params.limit = pagination.limit;
      if (pagination.page) params.page = pagination.page;
      if (pagination.offset) params.offset = pagination.offset;
    }
    const queryString = new URLSearchParams(params).toString();
    const path = `/movie${queryString ? `?${queryString}` : ""}`;

    return this.get(path);
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
   * @param pagination The pagination configuration.
   * @param id The ID of the movie.
   * @returns A promise that resolves to the quotes for the movie with the specified ID.
   */
  async getMovieQuotesById(id: string): Promise<types.Quote[]> {
    return this.get(`/movie/${id}/quote/`);
  }
}
