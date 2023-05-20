/**
 * Type for config parameters
 */
export type Config = {
  apiKey: string;
  baseUrl?: string;
};

/**
 * Type of Movie interface modeled from sample response object
 */
export interface Movie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

/**
 * Type of Quote interface modeled from sample response object
 */
export interface Quote {
  _id: string;
  dialog: string;
  movie: string;
}
