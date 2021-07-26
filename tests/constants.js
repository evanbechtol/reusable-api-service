const constants = {
  authToken: "test",
  headers: {
    authorization: {
      key: "Authorization",
      value: token => `Bearer ${token}`
    }
  },
  url: {
    valid: "https://www.test.com",
    invalid: "test.test"
  },
  validateResponse: {
    success: (expected, actual) => {
      expect(expected).toHaveProperty("success");
      expect(expected.success).toBeTruthy();
      expect(expected).toHaveProperty("data");
      expect(expected).toStrictEqual(actual.data);
    }
  }
}

export default constants;
