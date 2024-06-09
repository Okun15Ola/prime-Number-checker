// my logic

// const array = ['letter', 'comany', 'market'];
// const findlongestArray = (arr) => {
// let longestWord = "";

// for (let word of arr) {
//     if(word.length > longestWord.length) {
//         longestWord = word;
//     };
// };
//     return longestWord;
// };

// console.log(findlongestArray(array))



// const handleTime = () => {
//     let currentTime = new Date();
//     let currentHour = currentTime.getHours();
//     let currentMinute = currentTime.getTime();
//     let currentSeconds = currentTime.getSeconds()


//     let current = `${currentHour} : ${currentMinute} : ${currentSeconds}`;

//     console.log(current);

// }

// handleTime();

// function for a prime checker

const handlePrimeNumber = (n) => {
    if(n < 2) {
        return false;
    }
    for (let i = 2; i <=Math.sqrt(n); i ++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(handlePrimeNumber(8));