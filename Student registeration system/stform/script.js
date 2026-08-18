const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "new-68a89.firebaseapp.com",
  databaseURL: "https://new-68a89-default-rtdb.firebaseio.com",
  projectId: "new-68a89",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get selected courses
  const courseSelect = document.getElementById("courses");
  const selectedCourses = Array.from(courseSelect.selectedOptions)
    .map(opt => opt.value);

  const studentData = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    dob: document.getElementById("dob").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    department: document.getElementById("dept").value,
    religion: document.getElementById("religion").value,
    caste: document.getElementById("caste").value,
    courses: selectedCourses
  };

  db.ref("students").push(studentData)
    .then(() => {
      document.getElementById("msg").innerText = "✅ Data Saved Successfully!";
      document.getElementById("studentForm").reset();
    })
    .catch((error) => {
      console.log(error);
      document.getElementById("msg").innerText = "❌ Error saving data!";
    });
});