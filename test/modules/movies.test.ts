import { MoviesAPI } from "../../src/modules/movies";
import { ApiClient } from "../../src/common/api";
import * as types from "../../src/common/types";

jest.mock("../../src/common/api", () => ({
  ApiClient: jest.fn().mockImplementation(() => ({
    get: jest.fn(),
  })),
}));

describe("MoviesAPI", () => {
  let moviesAPI: MoviesAPI;
  let apiClientMock: jest.Mocked<ApiClient>;

  beforeEach(() => {
    moviesAPI = new MoviesAPI({
      apiKey: "RXpgoZuxCAXE48-tM-r-", // demo-api-key
      baseUrl: "https://the-one-api.dev/v2",
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getMovies", () => {
    it("should call the get method with the correct URL", async () => {
      const expectedUrl = "/movie";

      await moviesAPI.getMovies();

      expect(apiClientMock.get).toHaveBeenCalledWith(expectedUrl);
    });
  });

  describe("getMoviesById", () => {
    it("should call the get method with the correct URL and ID", async () => {
      const movieId = "123";
      const expectedUrl = `/movie/${movieId}`;

      await moviesAPI.getMoviesById(movieId);

      expect(apiClientMock.get).toHaveBeenCalledWith(expectedUrl);
    });
  });

  describe("getMovieQuotesById", () => {
    it("should call the get method with the correct URL and ID", async () => {
      const movieId = "123";
      const expectedUrl = `/movie/${movieId}/quote`;

      await moviesAPI.getMovieQuotesById(movieId);

      expect(apiClientMock.get).toHaveBeenCalledWith(expectedUrl);
    });
  });
});
