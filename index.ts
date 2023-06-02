import fs from 'fs'
const words = JSON.parse(fs.readFileSync('./words_dictionary.json', 'utf-8'))

let required = 'y';
let others = ['e', 'z', 'r', 'l', 'b', 'i'];

console.clear()
console.log("===========Seeking Words===========")

let all_letters = [...others, required];
Object.keys(words).forEach((word)=>{
    let contains_required = false;
    let can_be_made_of_all_letters = true;
    [...word].forEach(letter=>{
        contains_required ||= letter == required;
        can_be_made_of_all_letters &&= all_letters.includes(letter);
    })
    if(contains_required && can_be_made_of_all_letters && word.length > 3) {
        console.log(word);
    }
})

console.log("=============Done============")