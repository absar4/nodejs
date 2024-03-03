// const person = {
//   name: 'Absar Ahmad',
//   age: 22,
//   greeting: function () {
//     return `Hello ${this.name}`
//   },
// }

class Person {
  constructor(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
  }

  about() {
    return `I am ${this.name}, and I'm ${this.age} years old, and working as a ${this.job}`
  }
}

module.exports = Person
