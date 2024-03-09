//1
function reverseRec(num, res = '') { debugger
    num = num.toString()
    if (num === "") {
        return +res
    } else {
        res = num.slice(0, 1) + res
        return reverseRec(num.slice(1), res)
    }
}

//1.1
function reverseRec(num) {
    if (num < 10) {
        return num
    } else {
        let lastNum = num % 10
        let remainNum = Math.floor(num / 10)
        let reverse = reverseRec(remainNum)
        return +(lastNum.toString() + reverse.toString())
    }
}

//2
function replaceRec(arr, num, count = 0, i = 0){ 
	if (arr.length <= 1) {
		return -1
	}
	if(arr[0] === num){
    count++
			if(count === 2){
        return i
      }  
	}
	 return replaceRec(arr.slice(1), num, count, i + 1)
}

//3
function stringRec(str, sub, count = 0) {
    str = str.toLowerCase()
	sub = sub.toLowerCase()
	if (str.length < sub.length) {
        return count
    }
    if (str.substr(0, sub.length) === sub) {
        count++
    }
    return stringRec(str.substring(1), sub, count)
}


//4
function pi(str, i = 0) { 
    str = str.toLowerCase().split('');

    if (i === str.length) {
        return str.join('')
    }

    if (str[i] === 'p' && str[i + 1] === 'i') {
        str.splice(i, 2, '3', '.', '1', '4')
        i += 3
    }

    return pi(str.join(''), i + 1);
}

//5
function flatRec(arr) {debugger
    let res = []
    arr.forEach((el) =>{
        if (Array.isArray(el)) {
            res = res.concat(flatRec(el))
        } else {
            res.push(el) 
        }
    })

    return res
}
//6
function numRec(num) {debugger
    let sum = num.toString().split('').reduce((acc, digit) => acc + +(digit), 0);
    if (sum < 10) {
        return sum
    } else {
        return numRec(sum)
    }
}

//6.1
function numRec(num) {debugger
    num = num.toString() 
    let sum = 0
    for(let i = 0; i < num.length; i++){
        sum += +num[i]
    }
    if(sum < 10){
        return sum
    }
    return numRec(sum)
} 