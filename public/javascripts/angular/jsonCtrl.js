function jsonCtrl($scope) {
    $scope.myData = JSON.parse(localStorage.getItem("yaml"));
    console.log($scope.myData);
}