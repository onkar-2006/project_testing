# Simple To-Do Application

This project is a simple, responsive To-Do application built using vanilla HTML, CSS, and JavaScript.

## Architecture
- `index.html`: Main entry point containing the structure of the application.
- `css/style.css`: Stylesheet for the application layout and design.
- `js/app.js`: JavaScript file handling the application logic and DOM manipulation.
- `assets/`: Directory for any images, icons, or fonts.

## Implementation Plan

- [x] **Step 1: Project Initialization**
  - [x] Create the `index.html` file in the root directory.
  - [x] Create the `css/style.css` file.
  - [x] Create the `js/app.js` file.

- [x] **Step 2: HTML Structure (`index.html`)**
  - [x] Set up the HTML5 boilerplate.
  - [x] Link the `css/style.css` file in the `<head>`.
  - [x] Link the `js/app.js` file at the end of the `<body>`.
  - [x] Create a main container `div` for the application.
  - [x] Add a header (e.g., `<h1>To-Do List</h1>`).
  - [x] Create an input section containing a text `<input>` and an "Add" `<button>`.
  - [x] Create an empty `<ul>` element with an ID (e.g., `task-list`) to hold the to-do items.

- [x] **Step 3: Styling (`css/style.css`)**
  - [x] Add basic CSS resets (margin: 0, padding: 0, box-sizing: border-box).
  - [x] Style the `body` (font family, background color, flexbox to center the app).
  - [x] Style the main container (background, padding, border-radius, box-shadow, max-width).
  - [x] Style the input field and the "Add" button (padding, borders, hover effects).
  - [x] Style the `<ul>` and `<li>` elements (remove default list styles, add padding, border-bottom).
  - [x] Create a `.completed` CSS class for finished tasks (text-decoration: line-through, color change).
  - [x] Style the "Delete" button for each list item (color, alignment, hover effect).

- [x] **Step 4: Core JavaScript Logic (`js/app.js`)**
  - [x] Select necessary DOM elements (input field, add button, task list).
  - [x] Create an event listener for the "Add" button (and 'Enter' keypress).
  - [x] Implement the `addTask` function:
    - [x] Prevent adding empty tasks.
    - [x] Create a new `<li>` element.
    - [x] Add the task text to the `<li>`.
    - [x] Create and append a "Delete" button to the `<li>`.
    - [x] Append the `<li>` to the `<ul>`.
    - [x] Clear the input field.
  - [x] Implement event delegation on the `<ul>` to handle clicks on dynamically added elements:
    - [x] If the clicked element is a task, toggle the `.completed` class.
    - [x] If the clicked element is a "Delete" button, remove the parent `<li>` from the DOM.

- [x] **Step 5: Data Persistence (Local Storage)**
  - [x] Create a `saveTasks` function to serialize the task list and save it to `localStorage`.
  - [x] Create a `loadTasks` function to retrieve tasks from `localStorage` and render them on page load.
  - [x] Call `saveTasks` inside the add, toggle, and delete functions to keep the storage updated.
