str="The Phoenix Guild is the best Women in Web3 Community"
function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  }
  

  const sentence ="The Phoenix Guild is the best Women in Web3 Community";
  const reversedSentence = reverseWords(sentence);
  console.log(reversedSentence);
  