// let str = "manosinthiya"; 
// let strArray = str.split(""); 
// console.log(strArray) 
// let result = strArray.reduce((chars, ch) => { 
//     if (!chars[ch]) { 
//         chars[ch] = 1; 
//     } else { 
//         chars[ch] += 1; 
//     } 
//      console.log(ch); 
//     return chars; 
// }, []); 
   
// console.log("The occurrence of each letter in given string is:", result)


let str = "manosinthiya";
let strArray1 = str.split(""); 

let chars = {};
let i = 0;

while (i < strArray1.length) {
    let ch = strArray1[i];
    if (!chars[ch]) { 
        chars[ch] = 1; 
    } else { 
        chars[ch] += 1; 
    }
    i++;
}

//test

console.log("The occurrence of each letter in given string is:", chars);
console.log("git demo done")
console.log("git demo done")

