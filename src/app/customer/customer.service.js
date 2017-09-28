module.exports = function ($http, $log, $mdDialog, apiTestService) {
  var self = this;

  self.save = function (_firstName, _lastName, _cprCvr) {
    var req = {
      method: 'PUT',
      url: 'https://i1.test-services.nykredit.it/cem-hackathon-service/customers/' + _cprCvr,
      headers: {
        Authorization: 'Bearer ' + apiTestService.getToken(),
        Accept: 'application/hal+json',
        'X-Client-Version': '1.0.0',
        'Content-Type': 'application/json'
      },
      data: {firstName: _firstName, lastName: _lastName, cprCvr: _cprCvr}
    };

    return $http(req).then(function (response) {
      $log.log('customer saved' + response.data);
    }, function (error) {
      $log.log('customer save failed' + error);
      return false;
    });
  };

  self.getCustomers = function () {
    var req = {
      method: 'GET',
      url: 'https://i1.test-services.nykredit.it/cem-hackathon-service/customers/',
      headers: {
        Authorization: 'Bearer ' + apiTestService.getToken(),
        Accept: 'application/hal+json',
        'X-Client-Version': '1.0.0'
      }
    };

    return $http(req).then(function (response) {
      $log.log('customers fetched' + response.data);
      return response.data._embedded.customers;
    }, function (error) {
      $log.log('customers save failed' + error);
    });
  };
};
