// // normal function declaration techinique

// function sayHi() {
//     console.log('hi');
// }

// sayHi();

var say_name = function () {
    console.log('I\'m Bruno ...');
}

// calls a function inside another function

function call_function (fun){
    fun();
}


call_function(say_name);