import { QuotesAPI } from "../../src/modules/quotes";
import { ApiClient } from "../../src/common/api";
import * as types from "../../src/common/types";

// Mock the ApiClient class
jest.mock("../../src/common/api", () => ({
  ApiClient: jest.fn().mockImplementation(() => ({
    get: jest.fn(),
  })),
}));

describe("QuotesAPI", () => {
  let quotesAPI: QuotesAPI;
  let apiClientMock: jest.Mocked<ApiClient>;

  beforeEach(() => {
    quotesAPI = new QuotesAPI({
      apiKey: "RXpgoZuxCAXE48-tM-r-", // demo-api-key
      baseUrl: "https://the-one-api.dev/v2",
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getQuotes", () => {
    it("should call the get method with the correct URL", async () => {
      const expectedUrl = "/quote";

      await quotesAPI.getQuotes();

      expect(apiClientMock.get).toHaveBeenCalledWith(expectedUrl);
    });
  });

  describe("getQuotesById", () => {
    it("should call the get method with the correct URL and ID", async () => {
      const quoteId = "123";
      const expectedUrl = `/quote/${quoteId}`;

      await quotesAPI.getQuotesById(quoteId);

      expect(apiClientMock.get).toHaveBeenCalledWith(expectedUrl);
    });
  });
});
