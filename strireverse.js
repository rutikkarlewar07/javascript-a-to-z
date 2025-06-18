let s = ['h', 'e', 'l', 'l', 'o'];

let left = 0;
let right = s.length - 1;

while (left < right) {
  // swap characters
  [s[left], s[right]] = [s[right], s[left]];
  left++;
  right--;
}

console.log(s); // Output: [ 'o', 'l', 'l', 'e', 'h' ]
