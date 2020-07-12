console.log('Задание 1');

/* Создать массив из 10 случайных чисел и написать несколько функций для работы с ним. */

let a = [];
for (let i = 0; i < 10; i++) a[i] = Math.round(Math.random() * 10) - 5;
console.log('1. Функция принимает массив и выводит его на экран.')

/**
 *
 * @param {array} a
 */
function arrayPrint(a) {
  console.log(a);
}

arrayPrint(a);

console.log('2. Функция принимает массив и выводит только четные элементы.')

/**
 *
 * @param {array} a
 */
function arrayEvenElement(a) {
  let b = [];
  for (let i = 0; i < a.length; i = i + 2) b.push(a[i]);
  console.log(b);
}

arrayEvenElement(a);

console.log('3. Функция принимает массив и возвращает сумму всех элементов массива.')

/**
 *
 * @param {array} a
 * @returns {number} - sum of all elements
 */
function arraySum(a) {
  return a.reduce((a, b) => a + b);
}

console.log(`E([${a}])=${arraySum(a)}`);

console.log('4. Функция принимает массив и возвращает его максимальный элемент.')

/**
 *
 * @param {array} a
 * @returns {number} - max from all elements
 */
function arrayMax(a) {
  return a.reduceRight((a, b) => a > b ? a : b);
}

console.log(`max([${a}])=${arrayMax(a)}`);

console.log('5. Функция добавления нового элемента в массив по указанному индексу.')

/**
 *
 * @param {array} a
 * @param value
 * @param {number} index
 * @returns {array}
 */
function arrayDelete(a, index) {
  a.splice(index, 1);
  return a;
}

let n = Math.round(Math.random() * 9);
console.log(`It was: [${a}]. Has become: a=[${arrayInsert(a, n, 'new')}] after inserting a[${n}]='new'`);

console.log('6. Функция удаления элемента из массива по указанному индексу.')

/**
 *
 * @param {array} a
 * @param value
 * @param {number} index
 * @returns {array}
 */
function arrayInsert(a, index, value) {
  a.splice(index, 0, value);
  return a;
}

n = Math.round(Math.random() * 9);
console.log(`It was: [${a}]. After deleting a[${n}]=${a[n]} has become: a=[${arrayDelete(a, n)}]`);

console.log('Задание 2  ');

/* Создать еще один массив из 5 случайных чисел и написать следующие функции. */

let b = [];
for (let i = 0; i < 10; i++) a[i] = Math.round(Math.random() * 10);
for (let i = 0; i < 5; i++) b[i] = Math.round(Math.random() * 10);
console.log('1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.')

/**
 *
 * @param {array} a
 * @param {array} 8
 * @returns {array} - Unique Elements from [a] and [b]
 */
function arrayUniqueElements1(a, b) {
  return a.concat(b).filter((v, i, a) => a.indexOf(v) === i);
}

function arrayUniqueElements2(a, b) {
  return [...new Set(a.concat(b))];
}

console.log(`[${a}] & [${b}] = ${arrayUniqueElements1(a, b)}`);
console.log(`[${a}] & [${b}] = ${arrayUniqueElements2(a, b)}`);

console.log('2. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом, и во втором массивах) без повторений.');

/**
 *
 * @param {array} a
 * @param {array} 8
 * @returns {array} - common Elements for [a] and [b]
 */
function arrayCommonElements(a, b) {
  return b.filter((v, i, b) => a.indexOf(v) >= 0);
}

console.log(`[${a}] && [${b}] = ${arrayCommonElements(a, b)}`);

console.log('3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.');

/**
 *
 * @param {array} a
 * @param {array} 8
 * @returns {array} - Elements from [a] not in [b]
 */
function arrayElementsNotIn2(a, b) {
  return [...new Set(a)].filter((v, i, c) => b.indexOf(v) < 0);
}

console.log(`[${a}] not in [${b}] = ${arrayElementsNotIn2(a, b)}`);
