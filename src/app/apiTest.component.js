module.exports = {
  template: require('./apiTest.template.html'),
  controller: function ($mdDialog, $document, apiTestService, customerService) {
    var self = this;

    self.isOpen = false;

    function activate() {
      apiTestService.login().then(function () {
        getCustomers();
      });
    }

    function getCustomers() {
      customerService.getCustomers().then(function (customers) {
        self.customers = customers;
      });
    }

    self.editCustomer = function (customer) {
      $mdDialog.show({
        controller: require('./customer/customer.dialog.controller'),
        template: require('./customer/customer.dialog.template.html'),
        parent: angular.element($document.body),
        clickOutsideToClose: false,
        controllerAs: '$ctrl',
        locals: {
          customer: customer
        }
      }).then(function () {
        getCustomers();
      });
    };

    self.createCustomer = function () {
      $mdDialog.show({
        controller: require('./customer/customer.dialog.controller'),
        template: require('./customer/customer.dialog.template.html'),
        parent: angular.element($document.body),
        clickOutsideToClose: false,
        controllerAs: '$ctrl',
        locals: {
          customer: undefined
        }
      }).then(function () {
        getCustomers();
      });
    };

    activate();
  }
};
