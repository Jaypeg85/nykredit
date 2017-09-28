module.exports = function ($mdDialog, customerService, customer) {
  var self = this;

  if (customer) {
    self.cprCvr = customer.cprCvr;
    self.lastName = customer.lastName;
    self.firstName = customer.firstName;
  }

  self.title = customer ? 'Edit customer' : 'Create customer';

  self.cancel = function () {
    $mdDialog.cancel();
  };

  self.save = function () {
    customerService.save(self.firstName, self.lastName, self.cprCvr).then(function () {
      $mdDialog.hide();
    });
  };
};
