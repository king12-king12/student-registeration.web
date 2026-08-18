# Student Registration System

A simple, responsive and interactive **Student Registration System** built using **HTML, CSS, JavaScript and Firebase Realtime Database**. The application allows students to register by submitting their personal and academic information, validates the entered details, stores registration data in Firebase, and generates a unique Student ID.

## 🚀 Live Demo

**Student Registration System:**
https://leafy-concha-5faaf5.netlify.app/

## 📌 Project Overview

The Student Registration System is a web-based application designed to simplify the process of collecting and storing student registration information.

The project provides a user-friendly landing page where students can access the registration form. After submitting valid information, the application stores the student data in **Firebase Realtime Database** and generates a unique Student ID.

The interface also includes a **Light/Dark theme toggle**, animations, responsive styling and Firebase integration.

## ✨ Features

* 🎓 Student portal landing page
* 📝 Student registration form
* 🔐 Firebase Realtime Database integration
* 🆔 Automatic unique Student ID generation
* 📧 Email validation
* 📱 Indian mobile number validation
* 🎂 Age validation
* 🎯 Course selection
* 🌙 Light/Dark mode
* 💾 Theme preference stored using Local Storage
* 📱 Mobile-friendly interface
* ✨ Page-load and interaction animations
* ✅ Registration success/error messages
* 🔄 Automatic form reset after successful registration

## 🛠️ Technologies Used

| Technology                 | Purpose                                   |
| -------------------------- | ----------------------------------------- |
| HTML5                      | Structure of web pages                    |
| CSS3                       | Styling, responsive design and animations |
| JavaScript                 | Form validation and application logic     |
| Firebase                   | Cloud database                            |
| Firebase Realtime Database | Student data storage                      |
| Local Storage              | Saving theme preference                   |
| Netlify                    | Website deployment                        |

## 🏗️ Project Structure

```text
Student registeration system/
│
├── index.html
├── register.html
├── firebase.js
├── script.js
├── style.css
├── theme.js
│
├── stform/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .vscode/
│   └── settings.json
│
└── link for student registeration.txt
```

## 🔄 How the System Works

```text
Student
   ↓
Student Portal
   ↓
Click "Register Now"
   ↓
Registration Form
   ↓
Input Validation
   ↓
Generate Student ID
   ↓
Firebase Realtime Database
   ↓
Registration Successful
   ↓
Display Student ID
```

## 📝 Registration Details

The main registration page collects:

* Full Name
* Email
* Mobile Number
* Age
* Course

Available courses include:

* Computer Science
* AI
* Data Science
* Digital Marketing
* UI & UX

## ✅ Form Validation

The application performs client-side validation before storing the data.

### Name

The system checks that the student's name is not empty.

### Email

The system checks that the email contains a valid `@` symbol.

### Mobile Number

The application validates Indian mobile numbers using a 10-digit format beginning with 6–9.

### Age

The system checks that an age is entered and is at least 10.

### Course

Students must select a course before submitting the form.

## 🆔 Student ID Generation

After successful validation, the application automatically creates a unique Student ID using the current timestamp.

Example:

```text
STU-1755543212345
```

The Student ID is stored together with the student's registration information.

## ☁️ Firebase Integration

The project uses **Firebase Realtime Database** to store student registration records.

The data is organized under:

```text
students/
    STU-XXXXXXXXXXXX/
        studentId
        name
        email
        mobile
        age
        course
        createdAt
```

The Firebase database allows the submitted registration information to be stored remotely instead of only inside the browser.

## 🌙 Dark Mode

The website includes a floating theme button that allows users to switch between:

* ☀️ Light Mode
* 🌙 Dark Mode

The selected theme is stored in the browser's **Local Storage**, so the user's preference can remain available when they return to the website.

## 🎨 UI & Animations

The project includes several visual effects:

* Page fade-in animation
* Hero text animation
* Card slide-up animation
* Form pop-in effect
* Theme button rotation
* Theme button hover effect
* Gradient backgrounds
* Responsive card layout

## 💻 Running the Project Locally

### 1. Clone or download the project

Download the project files to your computer.

### 2. Open the project

Open the project folder in **Visual Studio Code**.

### 3. Start a local server

Because Firebase modules are used, it is recommended to run the project through a local development server.

You can use the **Live Server** extension in VS Code.

### 4. Open the website

Open:

```text
index.html
```

using the local server.

### 5. Test registration

Click:

```text
Register Now
```

Fill in the required information and submit the form.

If the Firebase configuration and database rules are correctly configured, the registration data will be stored in Firebase.

## 🌐 Deployment

The project is deployed using **Netlify**.

### Live Website

https://leafy-concha-5faaf5.netlify.app/

## 📊 Example Stored Data

A successful registration creates a structure similar to:

```json
{
  "studentId": "STU-XXXXXXXXXXXX",
  "name": "Student Name",
  "email": "student@example.com",
  "mobile": "9876543210",
  "age": "20",
  "course": "Computer Science",
  "createdAt": "2026-08-18T00:00:00.000Z"
}
```

## 🔒 Security Note

Firebase configuration information is included in the frontend project. Firebase security should be handled through **proper Realtime Database security rules** and authentication/authorization controls.

For a production application, avoid allowing unrestricted database writes or reads.

## 📱 Responsive Design

The application uses responsive web design principles so that the interface can be used on:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

## 🔮 Future Enhancements

Possible improvements for future versions include:

* 👨‍💼 Admin dashboard
* 🔍 Student search
* ✏️ Edit student information
* 🗑️ Delete student records
* 📄 Generate student registration PDF
* 📧 Email confirmation
* 🔐 Admin authentication
* 📊 Student statistics dashboard
* 📥 Export student data to Excel/CSV
* 🆔 QR code for Student ID
* 🖨️ Student registration receipt
* 🔎 Student ID verification page

## 🎯 Project Objective

The main objective of this project is to create a simple digital solution for student registration that reduces manual data collection and provides centralized online storage of student information.

## 👨‍💻 Project Type

**Web Development + Cloud Database Project**

## 📄 License

This project is intended for educational and academic purposes.

---

## ⭐ Acknowledgement

This project was developed as a student web development project using modern frontend technologies and Firebase cloud services.
