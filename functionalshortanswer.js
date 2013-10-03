//1. Pluralize - Rewrite the pluralize function using the ternary operator:


var word = "apple";
var number = 3; 

var pluralize = (number ===1) ? word : word + "s"; 
console.log(pluralize);

	



//2. Rewrite the following code to be more functional:
	


var getVictimInfo = function(name, phone, street) { 
	var victim = {};
	var name = "";
	var phone = "";
	var street = "";
 	victim.name = prompt("Please enter your name:");
 	victim.phone = prompt("Please enter your phone number:");
 	victim.street = prompt("Please enter your street:");
 	return victim; 
};

var alertInfo = getVictimInfo();
	alert('Thank you! Victim entered: \n' + 
	 alertInfo.name + ", " + 
	 alertInfo.phone + ", " + 
	 alertInfo.street);



//3. remove falsey values

//a. uses side effects 
var testArray = [true, 1,2,null,5, undefined, "string"];
var testForFalse = function(){
	for (i = testArray.length-1; i>=0; i--) {
		console.log("test");	
		if (!testArray[i])  {
			testArray.splice(i,1); 
			//console.log(testArray[i]);
			console.log(testArray);
		}
	};
		return testArray; 
			console.log(testArray);
	};		
		

testForFalse(testArray);


//b. pure function

var testArray = [true, 1,2,null,5, undefined, "string"];
var trueArray = [];
var testforTrue = function(array, newArray){
	for (i = 0; i <array.length; i++)	{
	console.log("test");
	if (array[i])  {
			trueArray.push(array[i]); 
			console.log(newArray);
		}	 
	};
		return trueArray;
};
testforTrue(testArray, trueArray);
console.log("true values:", trueArray);


	