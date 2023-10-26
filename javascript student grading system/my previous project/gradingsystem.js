// Define an array to store student grade data
const students = [];

// Function to calculate grade average and assign letter grade
/*function calculateGrades(student) {
  const gradeAverage = (student.math + student.english + student.science) / 3;
  let letterGrade;
  if (gradeAverage >= 90) {
    letterGrade = 'A';
  } else if (gradeAverage >= 80) {
    letterGrade = 'B';
  } else if (gradeAverage >= 70) {
    letterGrade = 'C';
  } else if (gradeAverage >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }
  return letterGrade;
}*/
function calculateGrades(student) {
    const gradeAverage = (student.math + student.english + student.science) / 3;
    let letterGrade;
    if (gradeAverage >= 90) {
      letterGrade = 'A';
    } else if (gradeAverage >= 80) {
      letterGrade = 'B';
    } else if (gradeAverage >= 70) {
      letterGrade = 'C';
    } else if (gradeAverage >= 60) {
      letterGrade = 'D';
    } else {
      letterGrade = 'F';
    }
    student.averageGrade = gradeAverage;
    student.letterGrade = letterGrade;
  }
  

// Function to display grades on HTML page
/*function displayGrades() {
  const outputDiv = document.getElementById('grade-output');
  let outputHtml = '<h2>Student Grades</h2><table><tr><th>Name</th><th>Math Grade</th><th>English Grade</th><th>Science Grade</th><th>Average Grade</th><th>Letter Grade</th></tr>';
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    outputHtml += '<tr><td>' + student.name + '</td><td>' + student.math + '</td><td>' + student.english + '</td><td>' + student.science + '</td><td>' + student.averageGrade + '</td><td>' + student.letterGrade + '</td></tr>';
  }
  outputHtml += '</table>';
  outputDiv.innerHTML = outputHtml;
}*/
const form = document.getElementById('grade-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const mathInput = document.getElementById('math-grade');
  const englishInput = document.getElementById('english-grade');
  const scienceInput = document.getElementById('science-grade');
  const student = {
    name: nameInput.value,
    math: parseInt(mathInput.value),
    english: parseInt(englishInput.value),
    science: parseInt(scienceInput.value)
  };
  calculateGrades(student);
  students.push(student);
  displayGrades();
});


// Function to handle form submission
