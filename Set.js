function Set() {
	
	
	this.intersection = function(listA, listB) {

	   var resultList = new Array(); // create a resultList array

	   /*-------------------------------Insert your code here -------------------------------------*/
		 /*A list of all elements common between both ListA and ListB*/
		 /*Example Function/Code from the Reading*/

	   if (listA === null || listB === null) { //Check for invalid input
		   return null; //exit and return null to indicate and error
	   }

	   for (var i = 0; i < listA.length; i++) { //for every element in list A
		   var nextValue = listA[i]; // get the next value in the list

		   //for every element in listB
		   for (var j = 0; j < listB.length; j++) {
		   		if (listB[j] === nextValue) { //this listB element equals nextValue
					resultList.push(listB[j]); //add ListB element to the end of resultList
					break; //break out of (exit) the listB inner loop
				}
		   } // end listB inner loop
	   } //end listA outer loop

	   /*-------------------------------Insert your code here -------------------------------------*/

	   return resultList;
	}

/*Bree Carrick part of group project*/
	this.union = function(listA, listB) {

	   var resultList = new Array();

	   /*-------------------------------Insert your code here -------------------------------------*/
		 /*A combined list of all elements in both ListA and ListB*/
		 /*Everybody in listA and listB with no duplicates*/

		 if (listA === null || listB === null) { //Check for invalid input
		   return null; //exit and return null to indicate and error
	   }

		 //Get the symmetric difference of SetA and setB
		 var symAB = this.symetricDifference(listA, listB);
		 //Append the returned elements to the resultSet
		 resultList = resultList.concat(symAB);

		 //Get the intersection of setA and setB
		 var intAB = this.intersection(listA, listB);
		 //append the returned elements to the resultSet
		 resultList = resultList.concat(intAB);

		 //return resultSet

	   /*-------------------------------Insert your code here -------------------------------------*/

	   return resultList;
	}



/* Jared Curtis Part */
this.relativeCompliment = function(listA, listB) {
	
	var resultList = [];
	
	if (listA === null || listB === null) { // Checking for invalid inputs
		return null; // One or both of the lists were null. Exit and return null to indicate there was an error
	}
	
	for (var i - 0; i < listA.length; i++) { // Beginning of loop for listA (outer loop)
		var nextValue = listA[i]; // Get the next element in ListA
		var valueFound = 0; // Set this to 0 at the beginning of each element being checked in outer loop.
		
		for (var j = 0; j < listB.length; j++) { // Loop through every element in listB (inner loop)
			
			// If the element in list A is equal to an element in listB then this should be EXCLUDED
			if (listB[j] === nextValue { 
				valueFound = 1; // Valuefound will be used at the end of the inner loop to evaluate if this element was unique or not.
				break; // No reason to keep checking further. One match means this will not be added to the set
			} // End of if item in listA and B
			
		} // End of loop for ListB (inner loop)

		if (valueFound === 0) {
			resultList.push(listA[i]);
		}
	} // End of loop for ListA (outer loop)
	
	
	return resultList;
}


/* Jared Curtis Part */
this.symetricDifference = function(listA, listB) {
	
	var resultList = [];
	
	if (listA === null || listB === null) { // Checking for invalid inputs
		return null; // One or both of the lists were null. Exit and return null to indicate there was an error
	}
	
	// ==========================================================================================================
  // Relative Complement of A \ Bas first part of this
	for (var i - 0; i < listA.length; i++) { // Beginning of loop for listA (outer loop)
		var nextValue = listA[i]; // Get the next element in ListA
		var valueFound = 0; // Set this to 0 at the beginning of each element being checked in outer loop.
		
		for (var j = 0; j < listB.length; j++) { // Loop through every element in listB (inner loop)
			
			// If the element in list A is equal to an element in listB then this should be EXCLUDED
			if (listB[j] === nextValue { 
				valueFound = 1; // Valuefound will be used at the end of the inner loop to evaluate if this element was unique or not.
				break; // No reason to keep checking further. One match means this will not be added to the set
			} // End of if item in listA and B
			
		} // End of loop for ListB (inner loop)

		if (valueFound === 0) {
			resultList.push(listA[i]);
		}
	} // End of loop for ListA (outer loop)
	// ==========================================================================================================
	
	// ==========================================================================================================
  // Relative Complement of B \ A as second part of this
	for (var i - 0; i < listB.length; i++) { // Beginning of loop for listB (outer loop)
		var nextValue = listB[i]; // Get the next element in listB
		var valueFound = 0;
		
		for (var j = 0; j < listA.length; j++) { // Loop through every element in listA (inner loop)
			
			// If the element in list A is equal to an element in listA then this should be EXCLUDED
			if (listA[j] === nextValue { 
				valueFound = 1; // Valuefound will be used at the end of the inner loop to evaluate if this element was unique or not.
				break; // No reason to keep checking further. One match means this will not be added to the set
			} // End of if item in listB and A
			
		} // End of loop for listA (inner loop)

		if (valueFound === 0) {
			resultList.push(listB[i]);
		}
	} // End of loop for listB (outer loop)
	// ==========================================================================================================
	
	return resultList;
}
	

}
