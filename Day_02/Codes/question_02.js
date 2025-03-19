/*define 10 students in JSON
store it in an Array
print the students who are following it
find the max and average GPA among students*/

let students = [
{regno:'2021/ict/01',name:'Kevin',course:'IT',gpa:3.78,gender:'M'},
{regno:'2021/ict/02',name:'Jane',course:'AMC',gpa:2.05,gender:'F'},
{regno:'2021/ict/03',name:'Savi',course:'PM',gpa:4.0,gender:'F'},
{regno:'2021/ict/04',name:'Yash',course:'CS',gpa:3.11,gender:'F'},
{regno:'2021/ict/05',name:'Raja',course:'IT',gpa:2.01,gender:'M'},
{regno:'2021/ict/06',name:'Windy',course:'PM',gpa:2.90,gender:'F'},
{regno:'2021/ict/07',name:'Shiro',course:'AMC',gpa:1.89,gender:'F'},
{regno:'2021/ict/08',name:'Yeheni',course:'IT',gpa:3.83,gender:'F'},
{regno:'2021/ict/09',name:'Ravindu',course:'PM',gpa:3.04,gender:'M'},
{regno:'2021/ict/10',name:'Nimsilu',course:'CS',gpa:4.0,gender:'M'},
]

console.log("Female students")
students.forEach((n)=>{
	if(n.gender == "F"){
		console.log(n.regno+","+n.name)
	}
})

console.log("\nStudents who are following IT")
students.forEach((n)=>{
	if(n.course == "IT"){
		console.log(n.regno+","+n.name)
	}
})

console.log("\nMaximum GPA: ")

let totalGPA = 0;
let maxGPA = students[0].gpa;

for (let k=0;k<students.length;k++) {
    totalGPA += students[k].gpa;
    if (students[k].gpa>maxGPA) {
        maxGPA = students[k].gpa;
    }
}

let avgGPA = totalGPA / students.length;
console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));