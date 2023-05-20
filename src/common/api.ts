import axios, { AxiosInstance, AxiosResponse } from "axios";
import * as types from "./types";

/**
 * Base class for making API requests.
 */
export abstract class ApiClient {
  private httpClient: AxiosInstance;

  /**
   * Creates an instance of the API client.
   * @param config The configuration options for the API client.
   */
  constructor(config: types.Config) {
    this.httpClient = axios.create({
      baseURL: config.baseUrl || "https://the-one-api.dev/v2",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
      },
    });
  }

  /**
   * Sends a GET request to the specified URL with optional query parameters.
   * @param url The URL to send the GET request to.
   * @returns A promise that resolves to the response data.
   */
  public async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.httpClient.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }
}
