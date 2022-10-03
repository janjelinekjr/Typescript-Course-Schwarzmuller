// Code goes here!

class Department {
   // private readonly id: string
   // public name: string
   protected employee: string[] = []

   constructor(private readonly id: string, public name: string){
      // this.name = n
      // this.id = id
   }

   describe(this: Department){
      console.log(`Department (${this.id}):  ${this.name}`);
  }

  addEmployee(employee: string){
   this.employee.push(employee)
  }
}

class ITDepartment extends Department {
   admins: string[]
   constructor(id: string, admins: string[]){
      super(id, 'IT')
      this.admins = admins
   }
}

const accounting = new Department('d1', 'Accounting')

accounting.addEmployee('Anna')
accounting.addEmployee('Max')

accounting.describe()

// accounting.employee[2] = 'Pepa'


