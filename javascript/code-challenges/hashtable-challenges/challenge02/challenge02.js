

function repeatedWord(string) {
  let words = string.split(' ');
  let hash = new HashTable(1024);
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (hash.contains(word)) {
      return word;
    } else {
      hash.add(word, word);
    }
  }
  return 'No repeated words';
}
