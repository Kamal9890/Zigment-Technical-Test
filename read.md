Dynamic Form Generator
This project is a real-time dynamic form generator that takes a JSON schema and creates a styled, functional form on the fly. It features a split-screen interface where you can edit the JSON schema on one side and preview the generated form on the other.

Features
Real-time Form Generation: Updates the form instantly as you modify the JSON schema.
Validation: Handles field-level validation based on the schema.
Responsive Design: Optimized for both desktop and mobile screens using Tailwind CSS.
Error Handling: Shows errors for invalid JSON in the editor and form validation issues.
Submission: Logs submitted data to the console and displays a success message.
Tech Stack
React: Frontend framework.
TypeScript: For type safety and improved code quality.
React Hook Form: For form handling and validation.
Tailwind CSS: For modern and responsive styling.
Vite: For fast development and build.
Getting Started
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-name>
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open the app in your browser at:

arduino
Copy code
http://localhost:5173
Usage
Modify the JSON schema in the editor on the left.
The form will update in real-time on the right.
Fill out the form and click Submit to log the data in the console.
Example JSON Schema
json
Copy code
{
  "formTitle": "Registration Form",
  "formDescription": "Fill out the details below.",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Name",
      "required": true,
      "placeholder": "Enter your name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email."
      }
    },
    {
      "id": "gender",
      "type": "radio",
      "label": "Gender",
      "required": true,
      "options": [
        { "value": "male", "label": "Male" },
        { "value": "female", "label": "Female" }
      ]
    },
    {
      "id": "bio",
      "type": "textarea",
      "label": "About Yourself",
      "required": false,
      "placeholder": "Tell us something about yourself."
    }
  ]
}
Folder Structure
bash
Copy code
📦 src
 ┣ 📂components
 ┃ ┣ 📜JsonEditor.tsx     # JSON Editor component
 ┃ ┣ 📜DynamicForm.tsx    # Dynamic form component
 ┃ ┗ 📜App.tsx            # Main app component
 ┣ 📜index.tsx            # App entry point
 ┗ 📜tailwind.config.js   # Tailwind CSS configuration


Unit Tests: Written using Jest.
End-to-End Tests: Written using Playwright.
Run all tests:

bash
Copy code
npm run test
Contributing
Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Add feature description"
Push the branch:
bash
Copy code
git push origin feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Screenshots
Desktop View
A side-by-side layout with the JSON editor on the left and the form preview on the right.

Mobile View
A stacked layout for easier navigation on smaller screens.













