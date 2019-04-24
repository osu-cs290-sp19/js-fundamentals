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
console.log("== Arrays");
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
  arr1.push(elem);
  console.log("elem:", elem);
});

console.log("arr1:", arr1);
arr1.pop();
arr1.pop();
console.log("arr1 after pops:", arr1);

var listStr = "1,2,3,4";
console.log("listStr.split(','):", listStr.split(','));

var list = [1, 2, 3, 4];
console.log("list.join(','):", list.join(','));

console.log("\n======================");
console.log("== Functions");
console.log("======================\n");

function foo(a, b, c) {
  return a + b + c;
}

console.log("foo(1, 2, 3):", foo(1, 2, 3));
console.log("foo('1', '2', '3'):", foo('1', '2', '3'));
console.log("foo('1'):", foo('1'));
console.log("foo(1, 2, 3, 4, 5, 6):", foo(1, 2, 3, 4, 5, 6));

var fn = function (a, b) {
  console.log('a:', a);
  console.log('b:', b);
};

fn(1, 2);

function add() {
  var sum = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log("add(1, 2, 3, 4, 5, 6):", add(1, 2, 3, 4, 5, 6));
console.log("add(1, 2):", add(1, 2));
console.log("add('1', '2'):", add('1', '2'));

console.log("\n======================");
console.log("== Objects");
console.log("======================\n");

var obj1 = {
  'cat': 'meow',
  'dog': 'woof',
  'fish': '...'
};

console.log("obj1:", obj1);

var obj2 = {
  'a': function () {},
  'b': [1, 2, 3],
  'c': 3.1415
};

var student = {
  lastName: 'Skywalker',
  firstName: 'Luke'
};

console.log("student:", student);
console.log("student['firstName']:", student['firstName']);
console.log("student.firstName:", student.firstName);

var fieldToAccess = 'firstName';
console.log("student[fieldToAccess]:", student[fieldToAccess]);
console.log("student.fieldToAccess:", student.fieldToAccess);
