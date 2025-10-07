# 📝 ToDo List App

A simple and stylish ToDo application built with **React**, **TypeScript**, and **Material UI (MUI)**.  
You can easily add, edit, delete, and filter your tasks — all with local storage support and theme switching 🌗

---

## 🚀 Demo

🔗 [Live Demo on Vercel](https://todo-list-lilac-pi-77.vercel.app/)

---

## 📸 Preview

![App Screenshot](./public/screencapture.png)

---

## ⚙️ Features

✅ Add, edit, delete tasks  
✅ Mark tasks as completed  
✅ Clear completed tasks  
✅ LocalStorage — your tasks stay saved  
✅ Dynamic counter of completed / total tasks  
✅ Confetti 🎉 animation when you finish all tasks  
✅ Light & Dark mode (automatic theme switching)  
✅ Fully responsive layout (mobile & desktop)  
✅ Keyboard shortcuts:

- **Enter** → add new task
- **Esc** → cancel edit mode

---

## 💡 Tech Stack

<div>
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Material UI" src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</div>

---

## 🧠 How It Works

- All todos are stored in the browser’s **LocalStorage**
- `useTodos` custom hook manages:
  - adding / editing / deleting / toggling tasks
  - counting completed items
  - clearing completed tasks
- Theme switching handled with **MUI ThemeProvider**
- Progress and confetti controlled via the **Hero** component

---

## 🛠 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/todo-list.git

# Move to folder
cd todo-list

# Install dependencies
npm install

# Start the project
npm run dev
```
