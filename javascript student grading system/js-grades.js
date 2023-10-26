var gradr = {
  // (A) PROPERTIES
  subjects : ["English", "Math", "Science", "Arts", "programming"],
  min : 0, max: 100,

  // (B) INIT
  init : () => {
    // (B1) HTML FORM
    let form = document.getElementById("gradeForm");
    form.onsubmit = () => gradr.calc();

    // (B2) CREATE FORM FIELDS
    let element;
    for (let s of gradr.subjects) {
      // (B2-1) SUBJECT LABEL
      element = document.createElement("label");
      element.innerHTML = s;
      form.appendChild(element);

      // (B2-2) SUBJECT MARKS INPUT
      element = document.createElement("div");
      element.name = s;
      element.className = "row";
      element.innerHTML = `<div class="grade"></div><input type="number" min="${gradr.min}" max="${gradr.max}" required>`;
      form.appendChild(element);
    }

    // (B2-3) SUBMIT BUTTON
    element = document.createElement("input");
    element.type = "submit";
    element.value = "Calculate";
    form.appendChild(element);
  },

  // (C) CALCULATE GRADES
  calc : () => {
    // (C1) VARIABLES
    let marks, grade, average = 0, total = 0,
        subjects = document.querySelectorAll("#gradeForm input[type=number]");

    // (C2) LOOP THROUGH SUBJECTS
    for (let s of subjects) {
      // (C2-1) ADD TO TOTAL
      marks = parseInt(s.value);
      total += marks;

      // (C2-2) GRADE
      if (marks>=70) { grade = "A"; }
      else if (marks>=60) { grade = "B"; }
      else if (marks>=50) { grade = "C"; }
      else if (marks>=40) { grade = "D"; }
      else if (marks>=30) { grade = "E"; }
      else { grade = "F"; }
      s.previousSibling.innerHTML = grade;
    }

    // (C3) TOTAL & AVERAGE
    document.getElementById("gradeT").innerHTML = total;
    document.getElementById("gradeA").innerHTML = (total / subjects.length).toFixed(2);

    // (C4) PREVENT FORM SUBMIT
    return false;
  }
};
window.onload = gradr.init;