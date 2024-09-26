// // 1-masala
// {
//     let n = 133   
//     let arr = +n.toString().split("").reverse().join("")
//     console.log(arr);
// }

// // 2-masala
// {
//     let a = ["text", "world", "laptop"]
//     let obj = {}
//     for(let i = 0; i < a.length; i++){
//         obj [a[i]] = a[i].length;
//     }
//     console.log(obj);
// }
// // 3-masala
// {

//     function minMaxWord(sentence) {
//         const words = sentence.split(' ');
        
//         let minWord = words[0];
//     let maxWord = words[0];

//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length < minWord.length) {
//             minWord = words[i];
//         }
//         if (words[i].length > maxWord.length) {
//             maxWord = words[i];
//         }
//     }
    
//     return { minWord: minWord, maxWord: maxWord };
// }

// const input = "Men dasturlash kursida o'qiyman";
// console.log(minMaxWord(input)); 

// }

// // 4-masala
// {
//     function getLevel(n) {
//         const result = [];
    
//         for (let i = 1; i <= n; i++) {
//             result.push(Math.pow(2, i));
//         }
    
//         return result;
//     }
    
//     console.log(getLevel(4)); 
//     console.log(getLevel(5));
// }
// // 5-masala
// {
//     function getMinLengthWord(sentence) {
//         const words = sentence.split(' ');
    
//         let minWord = words[0];
    
//         for (let i = 1; i < words.length; i++) {
//             if (words[i].length < minWord.length) {
//                 minWord = words[i];
//             }
//         }
    
//         return minWord;
//     }
    
//     console.log(getMinLengthWord("Salom dunyo"));
// }
// // 6-masala
// {
//     function foo(obj, n) {
//         const result = {};
    
//         for (let key in obj) {
//             if (obj.hasOwnProperty(key)) {
//                 result[key] = obj[key] * n;
//             }
//         }
    
//         return result;
//     }
    
//     const obj = {a: 2, b: 3, c: 4};
//     const n = 3;
//     const res = foo(obj, n);
//     console.log(res);
// }
// // 7-masala
// {
//     function foo(sentence) {
//         const words = sentence.split(' ');
//         let count = 0;
    
//         for (let i = 0; i < words.length; i++) {
//             if (!isNaN(words[i]) && words[i].trim() !== '') {
//                 count++;
//             }
//         }
    
//         return count;
//     }
    
//     console.log(foo("salom 777"));     
// }
// // 8-masala
// {
//     const foo = (...numbers) => {
//         const sum = numbers.reduce((a, n) => a + n, 0);
        
//         const result = Array.from(String(sum), Number);
        
//         return result;
//     };
    
//     console.log(foo(1, 22, 5));
// }
// // 9-masala
// {
//     const foo = (str) => {
//         const words = str.split(' ');
    
//         let count = 0;
//         for (let word of words) {
//             if (word.toLowerCase().includes('a')) {
//                 count++;
//             }
//         }
    
//         return count;
//     };
    
//     console.log(foo("salam alaykum")); 
// }
// // 10-masala
// {
//     const foo = (n) => {
//         let k = 0;
//         while (n > 1) {
//             n = n / 2;
//             k++;
//         }
    
//         return k;
//     };
    
//     const input = 8;
//     console.log(foo(input));    
// }
// // 11-masala
// {
//     function foo(n) {
//         const len = n.length;
    
//         if (len % 2 === 1) {
//             return n[Math.floor(len / 2)];
//         } else {
//             const mid1 = n[len / 2 - 1];
//             const mid2 = n[len / 2];
//             return (mid1 + mid2) / 2;
//         }
//     }
    
//     console.log(foo([1, 2, 3, 4, 5])); 
// }