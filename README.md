# Student Directory React App

A **responsive React application** to manage and track student performance. This app allows you to **add, edit, delete, search, filter, and sort students**, while supporting **dark mode**, **grid/list view toggle**, and **localStorage persistence**.  

---

## Features

- Add / Edit / Delete Students
- Search students by name
- Filter by course and attendance status
- Sort by name or grade
- Mark Attendance (Present / Absent)
- Top Performer Badge for high grades
- Dark Mode / Light Mode Toggle
- Grid / List View Toggle
- Responsive UI for mobile and desktop
- Persistent Data with `localStorage`

---

## Tech Stack

- **React.js** (Functional Components & Hooks)
- **CSS / Responsive Design**
- **LocalStorage** for data persistence

## 📁 Folder Structure

```text
STUDENT_DIRECTORY/
├── node_modules/
├── public/
├── screenshots/
│   ├── Dark_Grid_Mode.png
│   ├── Dark_List_Mode.png
│   ├── Light_Grid_Mode.png
│   ├── Light_List_Mode.png
│   └── Sort_BY_Grade.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── StudentCard.jsx
│   │   ├── StudentForm.jsx
│   │   └── Toolbar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Screenshots

**Grid View (Light Mode)**  
![Grid Light](screenshots/Light_Grid_Mode.png)

**Grid View (Dark Mode)**  
![Grid Dark](screenshots/Dark_Grid_Mode.png)

**List View (Light Mode)**  
![List Light](screenshots/Light_List_Mode.png)

**List View (Dark Mode)**  
![List Dark](screenshots/Dark_list_Mode.png)

**Sort by grade List view (Dark Mode)**  
![Sort by grade](screenshots/Sort_BY_Grade.png)

## Installation

1. Clone the repository:
[
```bash
git clone https://github.com/RabinNeupane/Student-Directory.git](https://github.com/RabinNeupane/Student-Directory.git)
