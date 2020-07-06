const fetch = require("node-fetch");

async function getEmployeeSalaries () {  
  var response = await fetch("https://pollysnips.s3.amazonaws.com/bostonEmployeeSalaries.json");
  var json = await response.json();
  return json;
}

function getMaxSalary(data) {  
  var maxSalary = 0;  
  for(var i=0; i<data.length; i++) {    
    if(Number(data[i][11]) > maxSalary) {
      maxSalary = Number(data[i][11]);
    }
  }  
  return maxSalary;  
}


(async function () {    
  try {
    var salaries = await getEmployeeSalaries();
    var maxSalary = getMaxSalary(salaries.data);
    console.log("Max salary: " + maxSalary);   
  } catch(e) {
    console.log("Error: " + e);
  }   
})()
