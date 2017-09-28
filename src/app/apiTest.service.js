module.exports = function ($http, $log) {
  var self = this;

  self.login = function () {
    var req = {
      method: 'POST',
      url: 'https://i1.test-services.nykredit.it/security/oauth2/token?grant_type=client_credentials',
      headers: {
        Authorization: 'Basic dGVzdC1jbGllbnRpZDpwYXNzd29yZA==',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return $http(req).then(function (response) {
      self.accessToken = response.data.access_token;
      $log.log('logged in' + response);
    }, function () {
      $log.log('login failed');
    });
  };

  self.getToken = function () {
    return self.accessToken;
  };
};
