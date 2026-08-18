import { database } from "./firebase.js";
import { ref, set } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("studentForm");
  const msg = document.getElementById("msg");
  const studentIdText = document.getElementById("studentId");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const mobileInput = document.getElementById("mobile");
  const ageInput = document.getElementById("age");
  const courseInput = document.getElementById("course");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    msg.style.color = "red";
    msg.textContent = "";
    studentIdText.textContent = "";

    if (!nameInput.value.trim()) {
      msg.textContent = "❌ Name is required";
      return;
    }

    if (!emailInput.value.includes("@")) {
      msg.textContent = "❌ Enter valid email";
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobileInput.value)) {
      msg.textContent = "❌ Mobile number must be 10 digits";
      return;
    }

    if (!ageInput.value || ageInput.value < 10) {
      msg.textContent = "❌ Enter valid age";
      return;
    }

    if (!courseInput.value) {
      msg.textContent = "❌ Select a course";
      return;
    }

    const studentId = "STU-" + Date.now();

    const studentData = {
      studentId,
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      mobile: mobileInput.value.trim(),
      age: ageInput.value,
      course: courseInput.value,
      createdAt: new Date().toISOString()
    };

    set(ref(database, "students/" + studentId), studentData)
      .then(() => {
        msg.style.color = "green";
        msg.textContent = "✅ Registration Successful";
        studentIdText.textContent = "Your Student ID: " + studentId;
        form.reset();
      })
      .catch(() => {
        msg.style.color = "red";
        msg.textContent = "❌ Firebase error. Try again.";
      });
  });

});
