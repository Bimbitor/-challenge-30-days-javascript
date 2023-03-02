function findLargestPalindrome(words) {
    // Tu código aquí 👈
    let palindromos = [];
    words.map(word => {
        let characters = word.split("")
        let reverseCharacters = characters.reverse()
        let reverseWord = reverseCharacters.join("")
        if (word === reverseWord){
            if (palindromos.length === 0) {
                palindromos.push(word)
            } else if(palindromos[0].length < word.length){
                palindromos.pop()
                palindromos.push(word)
            }
        }
    })
    if (palindromos.length === 0) {
        return null
    } else {
        console.log(palindromos[0]);
        return palindromos[0]
    }
}


findLargestPalindrome(["cotracecartoc", "level", "world", "hello", "paracecarap", "racecar"])

findLargestPalindrome(["Platzi", "javascript", "html", "css", "qwertyytrewq", "asdfggfdsa"])