function bubbleSort(array) {
	this.counter = 0;
	function run(array) {
		var swapCounter = 0;
		for (var i = 0; i < array.length; i++) {
			if (array[i] > array[i+1]) {
				var holder = array[i];
				array[i] = array[i+1];
				array[i+1] = holder;
				swapCounter++;
				this.counter ++;

			}
		}
		if (swapCounter > 0){
			return run(array);
		}	
	}
	run(array);
	return array;

}

// Function.prototype.swapAmount = function() {
// 	return this.counter;
// }

// if (bubbleSort.swapAmount) {
// 	console.log(bubbleSort.counter);
// }