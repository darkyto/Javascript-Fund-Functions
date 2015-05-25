console.log("===============");
console.log('START Problem 001');
function isInt(n){
return Number(n)===n && n%1===0;
}
var lastToWord = function (num) {
if (!isNaN(num)) {
var result = '';
if (isInt(num)) {
num = Math.abs(num); // for the negative values..
var last = num % 10;
var words = ['zero','one','two','three','four','five','six','seven','eight','nine'];
for (var i = 0; i < words.length; i++) {
result = words[last];
}
return result;
}
else {
return 'Float numbers not allowed!';
}
}
else {
return 'Wrong input - only integers allowed!';
}
};
var aNums = [512, 1024, 12309, 0 , -55, 2307 , 0.15];
for (var i = aNums.length - 1; i >= 0; i--) {
console.log(aNums[i]+' = '+lastToWord(aNums[i]));
}
console.log('END Problem 001');
console.log("===============");
console.log('START Problem 002');
function reverseNum(num) {
	var str = num.toString();
	var result = str.split('').reverse().join('');
	result *= 1;
	return result;
}
var aNums = [256, 123.45, 7.0000000555]; // test
for (var i = 0; i < aNums.length; i++) {
	console.log('Original number: '+aNums[i]);
	console.log('Reversed number: '+reverseNum(aNums[i]));
	console.log('-------------------');
}
console.log('END Problem 002');
console.log("===============");
console.log('START Problem 003');
function getMatches (text, word, caseSense) {
	if (caseSense || caseSense === undefined) {
		word = word.toLowerCase();
		text = text.toLowerCase();
	}
	var ind = 0;
	var wordLength = word.length;
	var index = [];
	var matches = [];

	while ( (index = text.indexOf(word, ind)) > -1 ) {
		matches.push(index);
		ind = index + wordLength;
	}
	return matches;
}
var testText = 'ala bmw bala nica some BMW cars appearing here bmw';
var testWord = 'BMW';
console.log('Start index of each occurance of ['
	+testWord+'] - '
	+'['+getMatches(testText, testWord)+']'+' (case sensitive)');
console.log('Start index of each occurance of ['
	+testWord+'] - '
	+'['+getMatches(testText, testWord, false)+']'+' (case Insensitive)');
console.log('Number of appearance (case sensitive) : '+getMatches(testText, testWord).length);
console.log('Number of appearance (case Insensitive) : '+getMatches(testText, testWord, false).length);
console.log('END Problem 003');
console.log("===============");
console.log('START Problem 004');	
function getDivs () {
	var count = document.getElementsByTagName('div').length;
	return count;
};	
console.log('The number of div elements in this page: '+getDivs());
console.log('END Problem 004');
console.log("===============");
console.log('START Problem 005');
var matchNumber = function (arr, num) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			count+=1;
		}
	}
	return count;
};
var aNums = [1,2,3,4,5,4,3,2,1,3,3,0,14];
var number = 3;
console.log('N = '+number);
console.log('Count = '+matchNumber(aNums, number));
var testMatchNum = function () {
	var aNums = [0,0,0,0,0];
	var bNums = [-2, 1,-2, 0.4, -2];
	var cNums = ['text', false, '2', 2, 2];
	for (var i = aNums.length - 1; i >= 0; i--) {
		a = matchNumber(aNums,0);
		b = matchNumber(bNums,-2);
		c = matchNumber(cNums,2);
	}
	if (a === 5 && b === 3 && c === 2) {
		return true;
	}
	else {
		return false;
	}
};
console.log(testMatchNum());
console.log('END Problem 005');
console.log("===============");
console.log('START Problem 006');
var compareWithNeigh = function(arr, i) {
	if (i === 0 || i === arr.length-1) {
		return false; // + ' element do not have two neigh.';
	}
	else {
		if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
			return true;
		}
		else {
			return false;
		}
	}
};
var aNums = [1,2,10,4,7];
console.log(aNums);
console.log('Is [10] larger then its neightbours : '+compareWithNeigh(aNums,2));
console.log('Is [7] larger then its neightbours : '+compareWithNeigh(aNums,4));
console.log('END Problem 006');
console.log("===============");
console.log('START Problem 007');
function firstLarger (arr) {
	result = -1;
	for (var i = arr.length - 1; i > 0; i-=1) {
		if (compareWithNeigh(arr, i)) {
			result = i;
		}
	}
	return result;
}
var aNums = [0,3,322,4,77,3];
console.log('First element larger then neigbours is at index ['+firstLarger(aNums)+']');
console.log('END Problem 007');
console.log("===============");