const affirmations = () => {
    let array1 = ["Lives are ", "Things are "];
    let array2 = ["always ", "never "]
    let array3 = ["what they seem.", "perfect."]
    
    return array1[Math.floor(Math.random()*array1.length)] + array2[Math.floor(Math.random()*array2.length)] + array3[Math.floor(Math.random()*array3.length)];
}
console.log(affirmations())
