/* var app = angular.module("Myapp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/index.html",
      controller: "forumController",
    })
    .when("/list", {
      templateUrl: "pages/list.html",
      controller: "libraryController",
    })
    .otherwise({ redirectTo: "/" });
});

app.factory("sharedDataService", function () {
  var data = {};
  return {
    getData: function () {
      return data;
    },
    setData: function (newData) {
      data = newData;
    },
  };
});

app.controller(
  "forumController",
  function ($scope, $location, sharedDataService) {
    $scope.items = [];
    $scope.addItem = function (item) {
      $scope.items.push({
        name: item.name,
        genre: item.genre,
        pages: item.pages,
        price: item.price,
      });
      sharedDataService.setData($scope.items);
      console.log($scope.items);
      $location.path("/list");
    };
  }
);

app.controller(
  "libraryController",
  function ($scope, $location, sharedDataService) {
    $scope.sharedItems = sharedDataService.getData();
  }
);
 */
// index.js
var app = angular.module("Myapp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/form.html", // Use a separate template for the form
      controller: "forumController",
    })
    .when("/list", {
      templateUrl: "pages/list.html",
      controller: "libraryController",
    })
    .otherwise({ redirectTo: "/" });
});

app.factory("sharedDataService", function () {
  var data = [];
  return {
    getData: function () {
      return data;
    },
    setData: function (newData) {
      data.push(newData);
    },
  };
});

app.controller(
  "forumController",
  function ($scope, $location, sharedDataService) {
    $scope.items = sharedDataService.getData();

    $scope.addItem = function (item) {
      $scope.items.push({
        name: item.name,
        genre: item.genre,
        pages: item.pages,
        price: item.price,
      });

      console.log($scope.items);
      $location.path("/list");
    };
  }
);

app.controller(
  "libraryController",
  function ($scope, $location, sharedDataService) {
    $scope.sharedItems = sharedDataService.getData();
    $scope.editItem = function (item) {
      $scope.editing = $scope.sharedItems.indexOf(item);
    };

    $scope.removeItem = function (item) {
      $scope.sharedItems.splice(item, 1);
    };

    $scope.addMore = function () {
      $location.path("/");
    };
  }
);
