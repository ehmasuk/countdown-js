# Countdown Timer

A small, easy-to-use JavaScript countdown timer that works in two ways:

- **Countdown Mode:** Count down to a specific date.
- **Timer Mode:** Count down from a set number of days, hours, minutes, and seconds. (It saves progress in your browser.)

The timer updates elements on your page that have the right class names.

---

## Features

- **Two Modes:**
  - Countdown to a future date.
  - Countdown for a specific time interval.
- **Custom UI:**  
  Use your own HTML elements.
- **Callbacks:**  
  Run a function when the timer ends.
- **Lightweight:**  
  No extra libraries needed.

---

## Demo

See the live demo here: [Live Demo](https://ehmasuk.github.io/countdown-js)

---

## Installation

Include the JavaScript file in your project:

```html
<script src="./countdown.js"></script>
```

---

## How to Use

### HTML Structure

Add a container with your chosen class name (for example, "countdown"). Inside, include elements with these classes: `.days`, `.hours`, `.minutes`, and `.seconds`.

Example:

```html
<div class="countdown">
  <span class="days"></span> : 
  <span class="hours"></span> : 
  <span class="minutes"></span> : 
  <span class="seconds"></span>
</div>
```

### Initialization

Create a new Countdown instance with your options.

#### Countdown to a Future Date

```javascript
new Countdown({
  className: "countdown",       // The container class name.
  destination: "12/12/26",      // The target date (MM/DD/YY).
});
```

#### Countdown for a Specific Time Interval

```javascript
new Countdown({
  className: "countdown",
  destination: [7, 1, 20, 0],   // [days, hours, minutes, seconds]
});
```

---

## Customization

You can style your timer by choosing your own container class. For example:

```html
<div class="my-custom-countdown">
  <span class="days"></span> : 
  <span class="hours"></span> : 
  <span class="minutes"></span> : 
  <span class="seconds"></span>
</div>
```

And initialize with:

```javascript
new Countdown({
  className: "my-custom-countdown",
  destination: "12/12/26",
});
```

---

## Options

- **labels:** *(Boolean, default: true)*  
  Set to false if you don't want the timer to show labels like "d", "h", "m", and "s".

Example:

```javascript
new Countdown({
  className: "countdown",
  destination: "12/12/26",
  labels: false,
});
```

---

## Callbacks

You can run a function when the timer reaches zero. For example:

```javascript
new Countdown({
  className: "countdown",
  destination: "12/12/26",
  onFinish: () => console.log("Countdown finished!"),
});
```

---

## How It Works

- **Initialization:**  
  The timer checks for a valid container (className) and a destination.
  
- **Mode Selection:**  
  - If `destination` is an array, it uses Timer Mode with localStorage.
  - If `destination` is a string, it treats it as a date.
  
- **UI Updates:**  
  The timer finds elements inside your container with the classes `.days`, `.hours`, `.minutes`, and `.seconds` and updates them every second.

---

## License

Feel free to modify this project to fit your needs.