import constants from "./constants";
import ApiService from "../index";

describe("Non-request Methods", () => {
  const cleanupInstance = () => {
    ApiService.setBaseUrl();
    ApiService.removeCommonHeader(constants.headers.authorization.key);
  };

  afterAll(cleanupInstance);

  test("Should set baseUrl to param", () => {
    ApiService.setBaseUrl(constants.url.valid);

    expect(ApiService.getBaseUrl()).toBe(constants.url.valid);
  });

  test("Should set common header", () => {
    ApiService.setCommonHeader(constants.headers.authorization.key, constants.headers.authorization.value);
    const returnedValue = ApiService.getHeaders().common[constants.headers.authorization.key];

    expect(returnedValue).toBe(constants.headers.authorization.value);
  });

  test("Should remove common header", () => {
    ApiService.setCommonHeader(constants.headers.authorization.key, constants.headers.authorization.value);
    ApiService.removeCommonHeader(constants.headers.authorization.key);

    const returnedValue = ApiService.getHeaders().common[constants.headers.authorization.key];
    expect(returnedValue).toBe(null);
  });

  test("Should have 'common' property when getHeaders is called", () => {
    const commonProperty = "common";
    expect(ApiService.getHeaders()).toHaveProperty(commonProperty);
  });

});
