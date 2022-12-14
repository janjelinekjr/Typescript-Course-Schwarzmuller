// Code goes here!

type Admin = {
   name: string
   privileges: string[]
}

type Employee = {
   name: string
   startDate: Date
}

type ElevatedEmployee = Admin & Employee

const el: ElevatedEmployee = {
   name: 'Max',
   privileges: ['create-server'],
   startDate: new Date(),
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable){
   if(typeof a === 'string' || typeof b === 'string'){
      return a.toString() + b.toString()
   } else {
      return a + b
   }
}

type UnknownEmployee = Employee | Admin

