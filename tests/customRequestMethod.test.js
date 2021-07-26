import ApiService from "../index";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import constants from "./constants";

const mock = new MockAdapter(axios);

beforeEach(() => {
  mock.reset();
});

describe("Custom Request", () => {
  test("Should return successfully when passed valid URL", () => {
    const expected = {success: true, data: "some response"};
    mock.onAny(constants.url.valid).reply(200, expected);

    const requestConfig = {url: constants.url.valid, method: "GET"};
    ApiService.customRequest(requestConfig)
      .then(actual => constants.validateResponse.success(expected,actual))
      .catch(err => console.error(err));
  });
});
