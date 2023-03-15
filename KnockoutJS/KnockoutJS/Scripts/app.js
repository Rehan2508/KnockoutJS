var viewModelPerson = {
    firstName: ko.observable("Matt"),
    lastName: ko.observable("Daemon"),
}

ko.applyBindings(viewModelPerson);

//To read observable current value
viewModelPerson.firstName();
viewModelPerson.lastName();

//To write observable values
viewModelPerson.firstName('John');
viewModelPerson.lastName('Matthew');
//or
viewModelPerson.firstName('Matt').lastName('Daemon');