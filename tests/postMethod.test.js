import ApiService from "../index";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import constants from "./constants";

const mock = new MockAdapter(axios);

beforeEach(() => {
  mock.reset();
});

describe("POST", () => {
  test("Should return successfully when passed valid URL", () => {
    const expected = {success: true, data: "some response"};
    const body = {someKey: "someValue"};
    mock.onPost(constants.url.valid).reply(200, expected);

    ApiService.post(constants.url.valid, body)
      .then(actual => constants.validateResponse.success(expected,actual))
      .catch(err => console.error(err));
  });
});
