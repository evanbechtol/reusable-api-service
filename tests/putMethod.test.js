import ApiService from "../index";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import constants from "./constants";

const mock = new MockAdapter(axios);

beforeEach(() => {
  mock.reset();
});

describe("PUT", () => {
  test("Should return successfully when passed valid URL", () => {
    const expected = {success: true, data: "some response"};
    const body = {someKey: "someValue"};
    mock.onPut(constants.url.valid).reply(200, expected);

    ApiService.put(constants.url.valid, body)
      .then(actual => constants.validateResponse.success(expected,actual))
      .catch(err => console.error(err));
  });
});
