
function mergeSort(arr) {
	
	if (arr.length === 0){
		return [];
	}
	//base case
	if (arr.length === 1){
		return arr;
	} 
	var splitArrays = splitter(arr);
	var firstHalf = mergeSort(splitArrays[0]);
	
	var secondHalf = mergeSort(splitArrays[1]);
	

	return merge(firstHalf, secondHalf);
};


function merge (arr1, arr2){
	var answer = [];
	var combinedLength = arr1.length + arr2.length;
	while(combinedLength > answer.length){
		if (arr1[0] !== undefined && arr2[0] !== undefined){
			if(arr1[0] < arr2[0]){
				answer.push(arr1.shift());
			} else {
				answer.push(arr2.shift());
			}
		} else if(!arr1[0]){
			answer.push(arr2.shift());
		} else {
			answer.push(arr1.shift());
		}
	}
	return answer;
}

function splitter(arr) {
	var arr1 = arr.slice(0, Math.ceil(arr.length/2));
	var arr2 = arr.slice(Math.ceil(arr.length/2), arr.length);

	return [arr1, arr2];
}


// // THOUGHT PROCESS HERE:
// // [[110, 33, 50, 2, 4, 3, 3]] ---> 1 array of 7 elements

// // run: splitter(arr[0])
// // [[110, 33, 50, 2],[4, 3, 3]]

// // run: splitter(arr[0]), splitter(arr[1]) 
// // [[110, 33], [50, 2], [4, 3], [3]]

// // run: splitter(arr[0]), splitter(arr[1]), splitter(arr[2]), splitter(arr[3]) 
// // [[110], [33], [50], [2], [4], [3], [3]]   ---> 7 arrays of 1 element






