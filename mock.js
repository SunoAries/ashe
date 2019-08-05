var mockServer = require('mockserver-client'),
    mockServerClient = mockServer.mockServerClient // MockServer and proxy client

mockServerClient("localhost", 1081).mockAnyResponse({
    "httpRequest": {
        "method": "POST",
        "path": "/login",
        "body": "{username: 'foo', password: 'bar'}"
    },
    "httpResponse": {
        "statusCode": 302,
        "headers": {
            "Location" : [ "https://www.mock-server.com" ]
        },
        "cookies": {
            "sessionId" : "2By8LOhBmaW5nZXJwcmludCIlMDAzMW"
        }
    }
}).then(
  function(result) {
      console.log(result)
  }, 
  function(error) {
    console.log(error)
  }
);
