Let courseCount = 1;

Function addCourse() {
    courseCount++;
    const coursesDiv = document.getElementById(‘courses’);
    const newCourseDiv = document.createElement(‘div’);
    newCourseDiv.className = ‘course’;
    newCourseDiv.innerHTML = `
        <label for=”credits${courseCount}”>Credits:</label>
        <input type=”number” id=”credits${courseCount}” name=”credits${courseCount}” required>
        <label for=”gradePoints${courseCount}”>Grade Points:</label>
        <input type=”number” id=”gradePoints${courseCount}” name=”gradePoints${courseCount}” required>
    `;
    coursesDiv.appendChild(newCourseDiv);
}

Document.getElementById(‘cgpaForm’).addEventListener(‘submit’, function(event) {
    Event.preventDefault();
    Let totalCredits = 0;
    Let totalGradePoints = 0;
    For (let I = 1; I <= courseCount; i++) {
        Const credits = parseFloat(document.getElementById(`credits${i}`).value);
        Const gradePoints = parseFloat(document.getElementById(`gradePoints${i}`).value);
        totalCredits += credits;
        totalGradePoints += credits * gradePoints;
    }
    Const cgpa = totalGradePoints / totalCredits;
    Document.getElementById(‘result’).innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
});