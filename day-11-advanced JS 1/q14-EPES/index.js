let employees =  [
{ name: "Alice", tasksCompleted: 8, rating: 4.7 },
{ name: "Bob", tasksCompleted: 4, rating: 4.0 },
{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },
{ name: "David", tasksCompleted: 10, rating: 4.9 },
{ name: "Eve", tasksCompleted: 7, rating: 2.8 }
];
function employeePerformance(employees){
    const res = employees.filter((employees)=>employees.tasksCompleted>5);
    const mapping = res.map((res)=>{
        let level="";
        if(res.rating > 4.5)
            level = "Excellent";
        else if(res.rating>=3 && res.rating<=4.5)
            level = "Good"
        else
            level = "Needs Improvement";
        return{name: res.name, performance: level};
    });
    const priority = {
      "Excellent": 3,
      "Good": 2,
      "Needs Improvement": 1
    };
    const finalList = mapping.sort((a, b) => {
      return priority[b.performance] - priority[a.performance];
    });
    console.log(finalList);
}
employeePerformance(employees);
