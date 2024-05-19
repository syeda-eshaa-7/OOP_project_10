import inquirer from "inquirer"

class Student{
    name:string
    constructor(n:string){
        this.name=n
    }
}
class Person{
    students:Student[]=[]
    addStudent(obj:any){
        this.students.push(obj)
    }
}
const persons = new Person() 
const programStart =async (persons:Person) => {
 do {console.log("*************wellcome to the chat app***********************");

 const ans = await inquirer.prompt(
    [
        {
            type:"list",
            name:"select",
            message:"who would you like to talk",
            choices:['teacher','student']

        }
    ]
 )
 if(ans.select == 'teacher'){
   console.log("hello how can i help you");
   console.log("what would like to talk about");
   
 }
 if (ans.select == 'student') {
    const ans = await inquirer.prompt(
        {
            type:"input",
            message:"which student would you like to talk",
            name : "student"
        }
    )
 
    const student = persons.students.find(val => val.name== ans.student)
if(!student){
    const name = new Student(ans.student)
    persons.addStudent(name)
    console.log(`hello i am ${name.name}`);
    console.log(persons.students);
    
}
if(student){
    console.log(`hello i am ${student.name}..........`);
    console.log(persons.students);
}

 }}while(true)

}
programStart(persons)