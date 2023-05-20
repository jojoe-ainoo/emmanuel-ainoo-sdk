import { ApiClient } from "../common/api";
import * as types from "../common/types";

/**
 * API client for accessing quote-related endpoints.
 */
export class QuotesAPI extends ApiClient {
  /**
   * Retrieves a list of quotes.
   * @param pagination The pagination configuration.
   * @returns A promise that resolves to the list of quotes.
   */
  async getQuotes(pagination?: types.Pagination): Promise<types.Quote[]> {
    const params: Record<string, any> = {};
    if (pagination) {
      if (pagination.limit) params.limit = pagination.limit;
      if (pagination.page) params.page = pagination.page;
      if (pagination.offset) params.sort = pagination.offset;
    }
    return await this.get("/quote", { params });
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
