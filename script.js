//function for calculating grades
let calculate = () => {
    let english = document.querySelector("#english").value;
    let maths = document.querySelector("#maths").value;
    let physics = document.querySelector("#physics").value;
    let chemistry = document.querySelector("#chemistry").value;
    let computer = document.querySelector("#computer").value;

    let grade = "";
    let totalGrade = parseFloat(english) + parseFloat(maths) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(computer);
    //checking grae based on percentage
    let percentage = Math.floor((totalGrade / 500) * 100);
    if(percentage <= 100 || percentage >= 90) {
        grade = "A"
    }else if(percentage <= 89 || percentage >= 80) {
        grade = "B"
    }else if(percentage <= 79 || percentage >= 70) {
        grade = "C"
    }else if(percentage <= 69 || percentage >= 60) {
        grade = "D"
    }else if(percentage <= 60 || percentage > 35) {
        grade = "E"
    }else {
        grade = "F"
    }

    console.log(totalGrade);
    console.log(percentage);
    console.log(grade);
    if(english == "" || maths == "" || physics == "" || chemistry == "" || computer == "") {
        alert("Please enter marks in range of 100");
    }else {
        //check for Pass and Fail
        if(percentage > 35) {
            document.querySelector("#showdata").innerHTML = `<h3>Total Marks : ${totalGrade}</h3>`;
            document.querySelector("#showpercentage").innerHTML = `<h3>Your Average Marks are : ${percentage}</h3>`;
            document.querySelector("#showgrade").innerHTML = `<h3>You got ${grade} grade </h3>`;
        }else {
            document.querySelector("#showdata").innerHTML = `<h3>Total Marks : ${totalGrade}</h3>`;
            document.querySelector("#showpercentage").innerHTML = `<h3>Your Average Marks are : ${percentage}</h3>`;
            document.querySelector("#showgrade").innerHTML = `<h3>You got F grade .Failed !</h3>`;
        }
    }
}