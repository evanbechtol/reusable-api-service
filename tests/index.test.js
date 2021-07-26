import ApiService from "../index";

const cleanupInstance = () => {
  ApiService.setBaseUrl();
  ApiService.removeCommonHeader();
};

describe( "Methods Should Exist", () => {
  test( "Should expose setBaseUrl method", () => {
    expect( ApiService.setBaseUrl ).toBeDefined();
  } );

  test( "Should expose getBaseUrl method", () => {
    expect( ApiService.getBaseUrl ).toBeDefined();
  } );

  test( "Should expose getDefaults method", () => {
    expect( ApiService.getDefaults ).toBeDefined();
  } );

  test( "Should expose setCommonHeaders method", () => {
    expect( ApiService.setCommonHeader ).toBeDefined();
  } );

  test( "Should expose removeHeader method", () => {
    expect( ApiService.removeCommonHeader ).toBeDefined();
  } );

  test( "Should expose get method", () => {
    expect( ApiService.get ).toBeDefined();
  } );

  test( "Should expose post method", () => {
    expect( ApiService.post ).toBeDefined();
  } );

  test( "Should expose put method", () => {
    expect( ApiService.put ).toBeDefined();
  } );

  test( "Should expose delete method", () => {
    expect( ApiService.delete ).toBeDefined();
  } );

  test( "Should expose customRequest method", () => {
    expect( ApiService.customRequest ).toBeDefined();
  } );
} );

describe( "Non-request methods", () => {
  afterAll( cleanupInstance );

  test( "Should set baseURL to param", () => {
    const TEST_URL = "test-url.test";
    ApiService.setBaseUrl( TEST_URL );

    expect( ApiService.getBaseUrl() ).toBe( TEST_URL );
  } );

  test( "Should set common headers", () => {
    const TOKEN = "test";
    const TEST_HEADER = { key: "Authorization", value: `Bearer ${TOKEN}` };

    ApiService.setCommonHeader( TEST_HEADER.key, TEST_HEADER.value );
    const returnedValue = ApiService.getHeaders().common[ TEST_HEADER.key ];

    expect( returnedValue ).toBe( TEST_HEADER.value );
  } );
} );
