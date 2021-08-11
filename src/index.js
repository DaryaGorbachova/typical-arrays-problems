
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0;

  let result = array[0];
	for (let i = 1; i < array.length; i++) {
		if (result > array[i]) result = array[i];
	}
	return result;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0;

  let result = 0;
	for (let i = 0; i < array.length; i++) {
		if (result < array[i]) result = array[i];
	}
	return result;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) return 0;

  let result = 0;
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	result = sum / array.length
	return result;
}
