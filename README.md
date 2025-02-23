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

Simply include the JavaScript file in your project.

```html
<script src="./countdown.js"></script>
```

## Initialization

Initialize the countdown timer with the following options:

```javascript
const countdown = new Countdown({
    className: "countdown", // Class name of the elements to update.
    destination: "12/12/26", // Destination date in the format "MM/DD/YYYY".
    onFinish: () => console.log("Countdown finished!"), // Optional callback for when the countdown reaches zero.
});
```

## Usage

### HTML Structure

Ensure your HTML contains elements with the class name you pass to the plugin. Each container should include elements with the following child classes to display the countdown:

.days
.hours
.minutes
.seconds

```html
<div class="countdown">
    <span class="days"></span> : <span class="hours"></span> : <span class="minutes"></span> :
    <span class="seconds"></span>
</div>
```

You are good to go! 🙂

### Countdown Mode

To start a countdown timer, simply pass the destination date in the format "MM/DD/YYYY" to the `destination` option.

```javascript
const countdown = new Countdown({
    className: "countdown",
    destination: "12/12/26",
});
```

### Timer Mode

To start a countdown timer with localStorage persistence, pass an array of integers representing the time interval (days, hours, minutes, seconds) to the `destination` option.

```javascript
const countdown = new Countdown({
    className: "countdown",
    destination: [0, 1, 20, 0], //countdown for 0d 1h 20m 0s
});
```

## Customization

You can customize the UI elements by updating the class names of the elements dynamically.

```javascript
const countdown = new Countdown({
    className: "countdown",
    destination: "12/12/26",
});
```

In this example, the countdown elements will be updated with the class names `.days`, `.hours`, `.minutes`, and `.seconds`.

## How It Works

### Initialization:

The plugin validates the required options (className and destination).

### Mode Determination:

If the destination is an array, it is treated as a timer countdown and uses localStorage to persist remaining time.
If the destination is a string, it converts it into a timestamp and starts a countdown to that date.

### UI Updates:

The plugin looks for child elements within the specified container that have classes .days, .hours, .minutes, and .seconds and updates them every second.

## Callbacks

You can execute a callback function when the countdown reaches zero by passing a callback function to the `onFinish` option.

```javascript
const countdown = new Countdown({
    className: "countdown",
    destination: "12/12/26",
    onFinish: () => console.log("Countdown finished!"),
});
```

## License

Feel free to modify the details (such as the links and license) to fit your project requirements.
