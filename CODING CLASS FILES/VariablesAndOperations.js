//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 9;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 152.32;

//create a variable to hold a person's middle initial
let middleInitial = 'C';

//create a variable to hold true if it's hot outside and false if it's cold outside
let itsColdOutside = true
//create a variable to hold a customer's first name
let customerFirstName = 'Aymar';

//create a variable to hold a street address
let streetAddress = '3244 Normal Blvd';

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInitial);
console.log(itsColdOutside);
console.log(customerFirstName);
console.log(streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 3;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
costOfGroceries = costOfGroceries + 51;
console.log(costOfGroceries);


//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'D';
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
itsColdOutside = !itsColdOutside;
console.log(itsColdOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let fullName = customerFirstName + ' ' + middleInitial + ' Dossou';
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log('Hi, my name is' + ' ' + customerFirstName + ' ' + 'and I live on' + ' ' + streetAddress + '.' + ' ' +  'I am very please to meet you' + '!' );