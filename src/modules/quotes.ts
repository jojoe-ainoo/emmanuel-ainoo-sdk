import { ApiClient } from "../common/api";
import * as types from "../common/types";

/**
 * API client for accessing quote-related endpoints.
 */
export class QuotesAPI extends ApiClient {
  /**
   * Retrieves a list of quotes.
   * @returns A promise that resolves to the list of quotes.
   */
  async getQuotes(): Promise<types.Quote[]> {
    return await this.get("/quote");
  }

  /**
   * Retrieves a quote by its ID.
   * @param id The ID of the quote.
   * @returns A promise that resolves to the quote with the specified ID.
   */
  async getQuotesById(id: string): Promise<types.Quote> {
    return await this.get(`/quote/${id}`);
  }
}
