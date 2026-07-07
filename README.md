# Task 6: Contact Form with JavaScript Client-Side Validation

A clean, modern, and responsive contact form built using HTML5, CSS3, and vanilla JavaScript. This project focuses on client-side form handling, constraint validation using regular expressions (Regex), and dynamic user feedback.

## 🚀 Features

- **Semantic HTML5 Structure:** Includes fields for Name, Email, and Message.
- **Modern UI/UX CSS:** Styled with focus states, error highlights, and dynamic success banners.
- **Custom Client-Side Validation:** Disables default browser validation (`novalidate`) to handle input checking with custom JavaScript logic.
- **Robust Email Verification:** Uses a strict Regular Expression (Regex) pattern to ensure valid email syntax.
- **Dynamic User Feedback:** 
  - Trims white spaces to prevent empty/space-only submissions.
  - Displays instant error messages directly below invalid fields.
  - Highlights problematic input fields with error boundaries.
  - Displays a dynamic success banner and resets the form upon successful validation (no backend required).

## 🛠️ Tools Used

- **Editor:** VS Code
- **Testing environment:** Chrome Browser
- **Languages:** HTML5, CSS3, JavaScript (ES6)

## 📂 Project Structure

├── index.html     # Form layout and structure
├── style.css      # Component styling and layout rules
└── script.js      # Validation logic and DOM manipulation

## 🧪 Edge Cases Tested

- Empty form submissions.
- Inputs containing only blank spaces (bypassed using `.trim()`).
- Invalid email formats (e.g., missing `@`, missing domain, or typos).
- Successful full-form completion behavior.
-
