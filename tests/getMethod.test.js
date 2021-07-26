import ApiService from "../index";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import constants from "./constants";

const mock = new MockAdapter(axios);

beforeEach(() => {
  mock.reset();
});

describe("Get", () => {
  test("Should return successfully when passed valid URL", () => {
    const expected = {success: true, data: "some response"};
    mock.onGet(constants.url.valid).reply(200, expected);

    ApiService.get(constants.url.valid)
      .then(actual => constants.validateResponse.success(expected,actual))
      .catch(err => console.error(err));
  });
});
