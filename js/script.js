// ===================	FIRST TASK =========================

// var endNumber = +prompt('Enter a number')
// var evenNumber = ''
// for (var i = 0; i < endNumber; i++) {
// 	if (i % 2 === 0 && i % 4 !== 0) {
// 		evenNumber += i + ' '
// 	}
// }
// console.log(evenNumber)

// ===========================	SECOND TASK ========================

// var hours = +prompt('Enter a time: ')
// if (hours >= 0 && hours < 12) {
// 	console.log(hours + ' a.m.')
// } else if (hours > 12 && hours < 24) {
// 	var pmTime = hours % 12
// 	console.log(pmTime + ' p.m.')
// }

// =============================== THIRD TASK ============================

// var quantity = +prompt('How much numbers?')
// var sum = 0
// for (var i = 1; i <= quantity; i++) {
// 	var numbers = +prompt(i + ' number')
// 	sum += numbers
// }
// console.log(sum)

// ==============================	FOURTH TASK ===============================

var num1 = +prompt('Number 1: ')
var num2 = +prompt('Number 2: ')
var allDividers = ''

var maxNum = Math.max(num1, num2)

for (var i = 0; i <= maxNum; i++) {
	if (num1 % i === 0 && num2 % i === 0) {
		allDividers += i + ' '
	}
}
console.log(allDividers)
