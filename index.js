console.log("Hello world!");

console.log("\n======================");
console.log("== Variables");
console.log("======================\n");

var n = 4.23234;
var someVariableName = "string";
// n = "string";

console.log("typeof(n):", typeof(n));

console.log("\n======================");
console.log("== Numbers");
console.log("======================\n");

console.log("9 / 5:", 9 / 5);

console.log("\n======================");
console.log("== Comparisons");
console.log("======================\n");

console.log("2 == 2:", 2 == 2);
console.log("2 == '2':", 2 == '2');
console.log("2 == '3':", 2 == '3');

console.log("2 === 2:", 2 === 2);
console.log("2 === '2':", 2 === '2');

console.log("2 !== 2:", 2 !== 2);
console.log("2 !== '2':", 2 !== '2');

console.log("2 <= '3':", 2 <= '3');

console.log("\n======================");
console.log("== Strings");
console.log("======================\n");

var str1 = "some string" + " concatenated to another string";
console.log("str1:", str1);

var str2 = "four = " + 2 + 2;
console.log("str2:", str2);

console.log("str2.length:", str2.length);
str2[4] = 'x';
console.log("str2:", str2);

var decathlon = 'decathlon';
console.log("decathlon.indexOf('cat'):", decathlon.indexOf('cat'));

var team = 'team';
console.log("team.indexOf('i'):", team.indexOf('i'));
var escaped = "\"escaped\"";

console.log("\n======================");
console.log("== Strings");
console.log("======================\n");

var arr1 = [ 1, 2, 3 ];
console.log("arr1:", arr1);

var arr2 = [ 1, '2', [ 4, 5, '6' ] ];
arr2.push("abc");
console.log("arr2:", arr2);

var x;
for (var i = 0; i < arr2.length; i++) {
  var x;
  console.log("arr2[" + i + "]:", arr2[i]);
}

arr2.forEach(function (elem) {
  console.log("elem:", elem);
});
