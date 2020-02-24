const myArray = [2, 5, 8, 20, 18]
console.log(myArray)
// Traditional for loop
let sum = 0
for (let index = 0; index < myArray.length; index++) {
  sum = sum + myArray[index]
}
console.log(sum)

// Accumulate sum using for of
sum = 0
for (const item of myArray) {
  sum = sum + item
}
// Divide each element by two
console.log('before', myArray)
for (let index = 0; index < myArray.length; index++) {
  myArray[index] = myArray[index] / 2
}
console.log('after', myArray)

const newArray = []
console.log('before', myArray)
for (let index = 0; index < myArray.length; index++) {
  newArray.push(myArray[index] / 2)
}
console.log('after', newArray, 'original', myArray)

function addTwo (value, index, array) {
  return value + 2
}

const resultArray = myArray.map(addTwo)
console.log(resultArray)

const arrFun = (value) => value + 2
const resultArray2 = myArray.map(arrFun)
console.log(resultArray2)

const resultArray3 = myArray.map((value) => value + 2)
console.log(resultArray3)

function printItems (arrayInput) {
const htmlArray = myArray.map((value) => `<p>${value}</p>`)
console.log(htmlArray)
return htmlArray
}

print(myArray)
function compareNumbers (a,b) {
  return a - b
}

print(myArray.sort(compareNumbers))

printItems(myArray.sort((a,b) => a - b ))

let todolist = [
  {
    content:'Task 1',priority: 2, completed: true
  },
  {
    content:'Task 2',priority: 1, completed: true
  },
  {
    content:'Task 3',priority: 3, completed: false
  }
]
console.log(todolist)

function printTodo (arrayInput) {
  const htmlArray = arrayInput.map((value) =>
  `<p>${
    (value.completed)? 'class="done"' : ''  }>
    ${value.priority}:${value.content}
   </p> `)
   return htmlArray
}
console.log(printTodo(todolist).join('\n'))
const filteredArray = []
for (const item of todolist) {
  if (!item.completed){
    filteredArray.push(item)
  }
}
console.log(printTodo(filteredArray).join('\n'))

function evalItem(item){
  return !item.completed
}
console.log(printTodo(todolist.filter()).join('\n'))
console.log(printTodo(todolist.filter(item) => item.completed))