function jsonCtrl($scope) {
    $scope.myData = getJSON();
    editor.getSession().on('change', function (e) {
        try {
            $scope.myData = getJSON();
            $scope.$apply();
        } catch (e2) {
            //window.alert("Syntax Error");
            swal("Syntax Error", "Please check your yaml syntaxes!", "error");
        }
    });

    function getJSON() {
        return JSON.parse(JSON.stringify(YAML.parse(editor.getValue())));
    }

}