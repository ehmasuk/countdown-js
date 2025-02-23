# Countdown Timer

A lightweight, easy, vanilla JavaScript countdown timer that supports two modes:

-   **Countdown Mode:** Count down to a specific date.
-   **Timer Mode:** Count down from a specified time interval (days, hours, minutes, seconds) with localStorage persistence.

The plugin dynamically updates elements on the page based on a provided class name and child selectors (`.days`, `.hours`, `.minutes`, `.seconds`).

## Features

-   **Dual Modes:**
    -   Countdown to a future date.
    -   Countdown timer that persists state using `localStorage`.
-   **Customizable UI:**  
    Update UI elements with class names dynamically.
-   **Callbacks:**  
    Option to execute a callback when the countdown/timer finishes.
-   **Lightweight:**  
    No dependencies required – pure JavaScript.

## Installation

Simply include the JavaScript file in your project. You can either copy the code into your project or link to the file hosted in your repository.

```html
<script src="./countdown.js"></script>
```
