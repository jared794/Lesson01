this.intersection = function(listA, listB) {
	
	var resultList = [];
	
	if (listA === null || listB === null) { // Checking for invalid inputs
		return null; // One or both of the lists were null. Exit and return null to indicate there was an error
	}
	
	for (var i - 0; i < listA.length; i++) { // Beginning of loop for listA (outer loop)
		var nextValue = listA[i]; // Get the next element in ListA
		
		for (var j = 0; j < listB.length; j++) { // Loop through every element in listB (inner loop)
			
			// If the element in list A is equal to an element in listB then this is a valid intersection
			if (listB[j] === nextValue { 
				resultList.push(listB[j]);
				break;
			} // End of if .....
		} // End of loop for ListB (inner loop)
	} // End of loop for ListA (outer loop)

	return resultList;
}


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

