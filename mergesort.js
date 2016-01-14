function mergeSort(arr) {
	return arr;
};

function merge(arr1,arr2) {
	var answer = [];
	var maxLength = Math.max(arr1.length,arr2.length);
	for (var i = 0; i < maxLength; i++) {
		if (!arr1[i]) {
			answer.push(arr2[i]);
			console.log(answer);
		}
		else if (!arr2[i]) {
			answer.push(arr1[i]);
		}
		else if(arr1[i] > arr2[i]) {
			answer.push(arr2[i]);
			answer.push(arr1[i]);
		}
		else {
			answer.push(arr1[i]);
			answer.push(arr2[i]);
		}
	};
	return answer;
};

function splitter(arr) {
	var arr1 = arr.slice(0, Math.ceil(arr.length/2));
	var arr2 = arr.slice(Math.ceil(arr.length/2), arr.length);

	return [arr1, arr2]
}



// if (array[i] > array[i+1]) {
// 				var holder = array[i];
// 				array[i] = array[i+1];
// 				array[i+1] = holder;