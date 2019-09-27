function EmailController($scope) {
  $scope.isComposeVisible = false;
  $scope.isPopupVisible = false;

  $scope.showPopup = function () {
    $scope.isPopupVisible = true;
    $scope.selectedEmail = email;
  };

  $scope.showCompose = function () {
    $scope.isComposeVisible = true;
  };

  $scope.closePopup = function () {
    $scope.isPopupVisible = false;
    $scope.isComposeVisible = false;
  };

  $scope.emails = [
    {
        from: 'John',
        subject: 'I love angular',
        date: 'Jan 1',
        body: 'hello world!'
    },
    {
        from: 'Jack',
        subject: 'Angular and I are just friends',
        date: 'Feb 15',
        body: 'just kidding'
    },
    {
        from: 'Ember',
        subject: 'I hate you Angular!',
        date: 'Dec 8',
        body: 'wassup dude'
    }
  ];

  $scope.sentEmails = [
    {
        to: 'Bob',
        subject: 'bla bla',
        date: 'Feb 30',
        body: 'Bla bla bla, bla bla bla bla; bla'
    },
  ];

  $scope.archiveEmails = [
    {
        save: 'Bobby',
        subject: 'bla bla',
        date: 'Feb 31',
        body: 'Bla bla bla, bla bla bla bla; bla'
    },
  ];

  $scope.composeEmail = {};

  $scope.sendEmail = function() {
      alert($scope.composeEmail.to
          + " " + $scope.composeEmail.subject
          + " " + $scope.composeEmail.body);
  };

  $scope.showComposePopup = function() {
    $scope.composeEmail = {};
    $scope.isComposePopupVisible = true;
  };

  $scope.activeTab = "inbox";
  $scope.activeTab = "sent";
  $scope.activeTab = "archive";
}
