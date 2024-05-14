//1
class Book {
    constructor(title, price, quantity) {
        this._title = title
        this._author = null
        this._price = price
        this._quantity = quantity
    }
    get title() {
        return this._title
    }

    set title(value) {
        if (value === '') {
            return;
        }
        return this._title = value
    }

    get price() {
        return this._price
    }

    set price(value) {
        if (value <= 0) {
            return;
        }
        return this._price = value
    }
    get quantity() {
        return this._quantity
    }

    set quantity(value) {
        if (value <= 0) {
            return;
        }
        return this._quantity = value
    }


    getProfit() {
        return (this._price * this._quantity);
    }

    setAuthor(author) {
        if (author instanceof Author) {
            this._author = author
        } else {
            throw new Error("Invalid author object")
        }
    }
    toString() {
        let authorBook = this._author ? this._author.toString() : "Unknown Author"
        return `Book Title: ${this._title}, Author: ${authorBook}, Price: ${this._price}, Quantity: ${this._quantity}`;
    }
}

class Author {
    constructor(name, email, gender) {
        this._name = name
        this._email = email
        this._gender = gender

    }
    get name() {
        return this._name
    }

    set name(value) {
        if (value === '') {
            return;
        }
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if (value === '') {
            return;
        }
        this._email = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        if (value === '') {
            return;
        }
        this._gender = value
    }

    toString() {
        return `Author Name ${this._name}, Email: ${this._email}, Gender: ${this._gender}`;
    }
}

//2

class Account {
    constructor(name, balance) {
        this._id = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
        this._name = name
        this._balance = balance
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (value === "") {
            return
        }
        return this._name = value
    }
    get balance() {
        return this._balance
    }

    set balance(value) {
        if (value < 0) {
            return
        }
        return this._balance = value
    }

    credit(amount) {
        this._balance += amount;
        return this.balance
    }

    debit(amount) {
        if (amount <= this._balace) {
            this._balance -= amount
            return this._balance
        }
        return ('Amount exceeded balance.')
    }

    transferTo(anotherAccount, sum) {
        if (sum <= this._balance) {
            this._balance -= sum
            anotherAccount.credit(sum)
            return this._balance
        }
        return ('Amount exceeded balance.')
    }

    static defineAccounts(accountFirst, accountSecond) {
        if ((accountFirst instanceof Account) && (accountSecond instanceof Account)) {
            return (
                accountFirst._id === accountSecond._id &&
                accountFirst._name === accountSecond._name &&
                accountFirst._balance === accountSecond._balance
            )
        }

        return false
    }

    toString() {
        return `Account name: ${this._name}, Id: ${this._id}, Balance: ${this._balance}`
    }
}

//3
class Person{
    constructor(firstName, lastName, gender, age){
          this._firstName = firstName
          this._lastName = lastName
          this._gender = gender
          this._age = age
      }
      get firstName(){
          return this._firstName
      }
      set firstName(value){
          if(value === '') return
          return this._firstName = value
      }
      get lastName(){
          return this._lastName
      }
      set lastName(value){
          if(value === '') return
          return this._lastName = value
      }
      get gender(){
          return this._gender
      }
      set gender(value){
          if(value === '') return
          return this._gender = value
      }
      get age(){
          return this._gender
      }
      set age(value){
          if(value <= 0 ) return
          return this._age = value
      }
      toString(){
          return `Person firstName: ${this._firstName}, LastName: ${this._lastName}, Gender: ${this._gender}, Age: ${this._age}`
      }
  }
  
  class Student extends Person{
        constructor(firstName, lastName, gender, age, program, year, fee) {
          super(firstName, lastName, gender, age)
          this._program = program
          this._year = year
          this._fee = fee
                  this._exams = {}
      }
  
      get program() {
          return this._program
      }
  
      set program(value) {
          if(value === '') return
         return this._program = value
      }
  
      get year() {
          return this._year;
      }
  
      set year(value) {
        if(value <= 0) return
           return this._year = value
      }
  
      get fee() {
          return this._fee
      }
  
      set fee(value) {
        if(value <= 0) return
           return this._fee = value
      }
     passExam(program, grade) {
          this._exams[program] = grade
          const allPassed = Object.values(this._exams).every(grade => grade >= 50)
          if (allPassed) {
              this._year++
          }
      }
  
      toString() {
          return `${super.toString()}, Program: ${this._program}, Year: ${this._year}`
      }
  }
  
  class Staff extends Person{
      constructor(firstName, lastName, gender, age, position, salary) {
          super(firstName, lastName, gender, age);
          this._position = position;
          this._salary = salary;
      }
  
      get position() {
          return this._position;
      }
  
      set position(value) {
                  if(value === '') return 
          return this._position = value;
      }
  
      get salary() {
          return this._salary;
      }
  
      set salary(value) {
                  if(value <= 0) return 
          return this._salary = value;
      }
  
      toString() {
          return `${super.toString()}, Position: ${this._position}, Salary: ${this._salary}`;
      }
  }
