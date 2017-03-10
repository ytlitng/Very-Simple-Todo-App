(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoController', TodoController);

    TodoController.$inject = [];

    /* @ngInject */
    function TodoController() {
        // in the function, you always need the following line of code.
        var vm = this;
        vm.todos = [];
        //the below function works like this...i took all the info the user inputed and stored it in vm.item & vm.priority
        // then I needed to push it out to the user, so I used the .push method.
        // I used a json within this function to get it to work
        // this function is for the add button
        vm.addTodo = function() {
            vm.todos.push({
                "item": vm.item, //item inuted i.e. grocery shopping
                "priority": vm.priority // i.e. high, medium, low priority
            });
            vm.item = '';
        }
    }

})();
