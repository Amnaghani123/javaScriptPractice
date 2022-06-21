function vowelsAndConsonants(s) {
  let vowels = "";
  let consonants = "";
  let vowelsConsonants  =';'
  for (let i = 0; i < s.length; i++) {
    if ( s[i] == "a" || s[i] == "e" ||s[i] == "i" ||s[i] == "o" ||s[i] == "u") {
        vowels = vowels + '\n'+ (s[i]) 
    }
    else{
        consonants =consonants + '\n'+ s[i]
    }
  }
  return   vowelsConsonants = [vowels,consonants].join('')
}



console.log(vowelsAndConsonants("javascriptloops"));