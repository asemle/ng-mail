angular.module("AngularMail")
.controller('contactsCtrl', function($scope, $state, contactsService) {
  $scope.contacts = contactsService.getContacts();
  $scope.messageContact = function( contact ) {
    $state.go("draft", {email: contact.email})
  }
})
