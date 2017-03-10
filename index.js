

angular.module('app', []);

// define an angular controller (2nd step! not required, but almost always do this)
angular
    .module('app')
    .controller('HomeController', HomeController);

// define a function to pass to the ^^ HomeController.controller ^^ function
function HomeController() {
    // in the function, you always need the following line of code.
    var vm = this;
    vm.finalList = []
//the below function works like this...i took all the info the user inputed and stored it in vm.item & vm.priority
// then I needed to push it out to the user, so I used the .push method.
// I used a json within this function to get it to work
// this function is for the add button
    vm.newItem = function() {
        vm.finalList.push({
            "item": vm.item, //item inuted i.e. grocery shopping
             "priority": vm.priority // i.e. high, medium, low priority

        });
        console.log(vm.priority);
vm.item ='';

    }



}
