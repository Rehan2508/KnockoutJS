var ListModel = function (items) {
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    this.addItems = function () {
        if (this.itemToAdd() != "") {
            this.items.push(this.itemToAdd());
            this.itemToAdd("");
        }
    }.bind(this);
}

ko.applyBindings(new ListModel(["Master JavaScript", "Master jQuery", "Master KnockoutJS"]));





//defining observable array
//var observableArr = ko.observableArray();

//Add some values
//observableArr.push('Matt');

//This observable array initially contains two objects
/*
var techArr = ko.observableArray([
    { name: "Jhon", job: "Software Developer" },
    { name: "Matt", job: "Web Developer" }
]);
*/
//Reading information from an observableArray
//alert('The length of the array is ' + techArr().length);
//alert('The first element is ' + techArr()[0].name);


//Properties and Methods of observable Array
//indexOf
//splice : element of i to j indexes
//pop, push, shift, unshift, reverse, sort, splice