const HashMap = require('./DSA-Hashmaps')

const HashMap = require('./hashMap')

function main() {
  const lor = new HashMap()
  lor.MAX_LOAD_RATIO = .5
  lor.SIZE_RATIO = 3
  
  lor.set('Hobbit', 'Bilbo')
  lor.set('Hobbit', 'Frodo')
  lor.set('Wizard', 'Gandolf')
  lor.set('Human', 'Aragorn')
  lor.set('Elf', 'Legolas')
  lor.set('Maiar', 'The Necromancer')
  lor.set('Maiar', 'Sauron')
  lor.set('RingBearer', 'Gollum')
  lor.set('LadyOfLight', 'Galadriel')
  lor.set('HalfElven', 'Arwen')
  lor.set('Ent', 'Treebeard')
  console.log('Maiar key:', lor.get('Maiar'))
  console.log('Hobbit key:', lor.get('Hobbit'))

  return lor
}

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.'; 
  let str2 = 'Hello World.';
  let map1 = new HashMap(); 
  map1.set(str1,10); 
  map1.set(str2,20); 
  let map2 = new HashMap();
  let str3 = str1; 
  let str4 = str2; 
  map2.set(str3,20); 
  map2.set(str4,10); 

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

console.log(WhatDoesThisDo())

// Remove duplicates
const string = 'google all that you think can think of';
const string2 = 'google';
const duplicate = new HashMap();

for (let i = 0; i < string2.length; i++) {
  duplicate.set(string2[i], string2[i]);
}

console.log(duplicate);
let newStr = '';
duplicate._hashTable.forEach(letter => {
  newStr += letter.value;
});

console.log(newStr);

// Any permutation a palindrome
const HashMap = require('./hashMap');
const string = 'acecarr';
const palindrome = new HashMap();

const palindrome = (string) => {
  const palindromeMap = new Map()
  let odd = 0
  for (let i = 0; i < string.length; i++) {
    if (palindromeMap.get(string[i]) === undefined) {
      palindromeMap.set(string[i], 1)
    }
    else {
      let char = palindromeMap.get(string[i])
      palindromeMap.set(string[i], char+=1)
    }
  }
  for (let i = 0; i < palindromeMap.size; i++) {
    if(palindromeMap.get(string[i]) % 2 !==0) {
      odd++
      console.log('odd', odd)
    }
    if(odd > 1) {
      return false
    }
  }
  return true
}

console.log(palindrome(''))

// Anagram grouping
const groupAnagrams = (strArr) => {
    const anagramMap = new Map()
    strArr.forEach((word) => {
      let sorted = alphabetize(word)
      if(anagramMap.has(sorted)) {
        anagramMap.get(sorted).push(word)
      }
      else {
        anagramMap.set(sorted, [word])
      }
    }) 
    return [...anagramMap.values()]
  }
  
  const alphabetize = word => {
    let alphebtized = word.split('').sort().join('')
    return alphebtized
  }
  
  console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))
  // [['east', 'eats', 'teas'], ['race', 'acre'], ['cars', 'arcs']]

// Separate Chaining
class Node {
    constructor( data ) {
      this.data = data
      this.next = null
    }
  }
  
  class HashMap {
    constructor(initialCapacity=8) {
      this.size = 0;
      this._hashTable = new Array(initialCapacity);
      this._capacity = initialCapacity;
      this._deleted = 0;
    }
  
    set(item) {
      let key = this._hashString(item)
      let node = new Node(item)
      if (this._hashTable[key]) {
        node.next = this._hashTable[key]
      }
      this._hashTable[key] = node
    }
  
    get(key) {
      let hash = this._hashString(key)
      if(!this._hashTable[hash]) return null
      let chain = this._hashTable[hash]
      if(chain.hasOwnProperty(key)) {
        return chain[key]
      }
      return null
    }
  
    remove(item) {
      let key = this._hashString(item)
      if (this._hashTable[key]) {
        if (this._hashTable[key].data === item) {
          this._hashTable[key] = this._hashTable[key].next
        } else {
          let current = this._hashTable[key].next
          let prev = this._hashTable[key]
          while(current) {
            if ( current.data === item ) {
              prev.next = current.next
            }
            prev = current
            current = current.next
          }
        }
      }
    }
    
    _hashString(string) {
      let hash = 5381;
      for (let i = 0; i < string.length; i++) {
          //Bitwise left shift with 5 0s - this would be similar to
          //hash*31, 31 being the decent prime number
          //but bit shifting is a faster way to do this
          //tradeoff is understandability
          hash = (hash << 5) + hash + string.charCodeAt(i);
          //converting hash to a 32 bit integer
          hash = hash & hash;
      }
      //making sure has is unsigned - meaning non-negtive number. 
      return hash >>> 0;
      }
    }
  
  
  
  
  const map = new HashMap()
  map.set('Elan')
  map.set('Elan')
  map.remove('Elan')
  // map.set('name', 'Elan')
  // map.set('name', 'Elan2')
  // map.set('name', 'Elan3')
  // console.log(map.get('name'))
  console.log(map._hashTable)