
//Task 1;
console.log('------TASK--1-----');

let set = new Set();

const myLetter = ['е', 'у', 'о', 'р', 'н', 'к']

// 1 sposib

function derevo(word) {
    let wordLowwer = word.toLowerCase();
    for(let i = 0; i < wordLowwer.length; i++){
        if(wordLowwer[i] == 'р' || wordLowwer[i] == 'у' || wordLowwer[i] == 'е' || wordLowwer[i] == 'о' || wordLowwer[i] == 'н'){
            set.add(wordLowwer[i]);        
        }
    }  
    console.log([...set]);
}

derevo('ДерЕвО');

// 2 sposib

function derevo2(word){
    word.toLowerCase().split('').map(el => { myLetter.includes(el) ? set.add(el) : 0; return set });
}

derevo2('ДерЕвО');



// Task 2
console.log('------TASK--2-----');

let arr = [
    { a:1, b:2 }, 
    { a:2, c:3 }, 
    { a:1, b:4 }
];

let newArr2 = [];

const seen = new Set();

function filterArr() {
    for(let i = 0; i < arr.length; i++){
        const duplicat = seen.has(arr[i].a);
        if(duplicat === false){
            newArr2.push(arr[i])
        }
        seen.add(arr[i].a);
        // console.log(!duplicat)
    }
}
filterArr();

console.log(newArr2);

// Task 3
console.log('------TASK--3-----');

const task3 = ['a', 7, 'g', 3, 'k'];
let count = 0;

function myCycle(){
    if(count < task3.length){
        console.log(task3[count]);
        count++
        myCycle();
    }
}
myCycle()

// // ---- 1 спосіб 
// console.log('Спосіб 1:');
// console.log(task3.join('\n')); // .split() 
// // ---- 2 спосіб 
// console.log('Спосіб 2:');
// console.log(...task3+'');
// // ---- 3 спосіб 
// console.log('Спосіб 3:');
// const [one, two, three, four, five] = task3;
// console.log(`${one + two + three + four + five}`);
// // ---- 4 спосіб 
// console.log('Спосіб 4:');
// {
//     const yourWord = ' new';
//     if(task3.length > 10){
//         console.log('Work with length < 10 only :(');
//         return 0;
//     }
//     if(count < task3.length){
//         task3Result.push(task3[count] + yourWord);
//         console.log(task3Result);
//         count += 1
//     }
//     if(count < task3.length){
//         task3Result.push(task3[count] + yourWord);
//         console.log(task3Result);
//         count += 1
//     }
//     if(count < task3.length){
//         task3Result.push(task3[count] + yourWord);
//         console.log(task3Result);
//         count += 1
//     }
//     if(count < task3.length){
//         task3Result.push(task3[count] + yourWord);
//         console.log(task3Result);
//         count += 1
//     }
//     if(count < task3.length){
//         task3Result.push(task3[count] + yourWord);
//         console.log(task3Result);
//         count += 1
//     }
//     if(count < task3.length){
//         task3Result.push(task3[count] + yourWord);
//         console.log(task3Result);
//         count += 1
//     }
//     if(count < task3.length){
//         task3Result.push(task3[count] + yourWord);
//         console.log(task3Result);
//         count += 1
//     }
//     if(count < task3.length){
//         task3Result.push(task3[count] + yourWord);
//         console.log(task3Result);
//         count += 1
//     }
//     if(count < task3.length){
//         task3Result.push(task3[count] + yourWord);
//         console.log(task3Result);
//         count += 1
//     }
//     if(count < task3.length){
//         task3Result.push(task3[count] + yourWord);
//         console.log(task3Result);
//         count += 1
//     }
// }

