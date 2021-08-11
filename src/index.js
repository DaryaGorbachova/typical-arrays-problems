
exports.min = function min (array) {
  let result = array[0];
	for (let i = 1; i < array.length; i++) {
		if (result > array[i]) result = array[i];
	}
	return result;
}

exports.max = function max (array) {
  let result = 0;
	for (let i = 0; i < array.length; i++) {
		if (result < array[i]) result = array[i];
	}
	return result;
}

exports.avg = function avg (array) {
  let result = 0;
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	result = sum / array.length
	return result;
}
