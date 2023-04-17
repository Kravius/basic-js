function transform(arr) {
	if (!Array.isArray(arr)) {
	  throw new Error('arr parameter must be an instance of the Array!');
	}

	const result = [];

	for (let i = 0; i < arr.length; i++) {
	  const currentElement = arr[i];


		 if(currentElement ==='--discard-next'){
			i++;
		 }

		else if (currentElement === '--discard-prev'){
			if (i > 0 && arr[i - 2] !== '--discard-next') {
			  result.pop();
			}
		}

		else if (currentElement === '--double-next'){
			if (i < arr.length - 1) {
			  result.push(arr[i + 1]);
			}
		}

		else if (currentElement === '--double-prev') {
			if (i > 0 && arr[i - 2] !== '--discard-next') {
			  result.push(arr[i - 1]);
			}
		}

		  else {
		//   if (i < arr.length && arr[i + 1] !== '--discard-prev') {
			  result.push(currentElement);

	  }
	}

	return result;
 }

console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))
//  usual.com))
