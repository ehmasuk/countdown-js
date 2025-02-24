class Countdown {
    labels = true

    constructor(options) {
        if (!options?.className || !options?.destination) {
            return console.warn("Countdown requires 'className' and 'destination' properties.");
        }

        this.countdownClassName = options.className;
        this.allCountdownDivs = document.querySelectorAll(`.${this.countdownClassName}`);

        if (!this.allCountdownDivs.length) {
            return console.warn(`No elements found with class name: ${this.countdownClassName}`);
        }

        if(options?.labels === false) this.labels = false

        if (Array.isArray(options.destination)) {
            if (!options.destination.reduce((acc, val) => acc = +val, 0)) {
                this.destination = options.destination;
                this.startTimer(options);
            } else {
                return console.warn(`Invalid destination for  ${this.countdownClassName}`);
            }
        } else {
            const destination = new Date(options.destination).getTime();
            if (destination) {
                this.destination = destination;
                this.startCountdown(options);
            } else {
                return console.warn(`Invalid destination for  ${this.countdownClassName}`);
            }
        }
    }

    startCountdown(options) {
        const updateCountdown = () => {
            const now = Date.now();
            let difference = this.destination - now;

            if (difference <= 0) {
                this.updateUI("00", "00", "00", "00");
                console.log(`${this.countdownClassName} countdown finished`);
                if (typeof options.onFinish === "function") options.onFinish();
                return;
            }

            const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
            const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
            const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
            const seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, "0");

            this.updateUI(days, hours, minutes, seconds);
            requestAnimationFrame(updateCountdown);
        };

        updateCountdown();
    }

    startTimer(options) {
        const SECONDS_IN_DAY = 86400;
        const SECONDS_IN_HOUR = 3600;
        const SECONDS_IN_MINUTE = 60;

        const [destDays = 0, destHours = 0, destMinutes = 0, destSeconds = 0] = this.destination;

        const destinationTime = destDays * SECONDS_IN_DAY + destHours * SECONDS_IN_HOUR + destMinutes * SECONDS_IN_MINUTE + destSeconds;

        const storageKey = `${this.countdownClassName}RemainingTime`;
        let remainingTime = localStorage.getItem(storageKey) ? parseInt(localStorage.getItem(storageKey), 10) : destinationTime;

        const updateTimerDisplay = () => {
            const days = Math.floor(remainingTime / SECONDS_IN_DAY);
            const hours = Math.floor((remainingTime % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
            const minutes = Math.floor((remainingTime % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
            const seconds = remainingTime % SECONDS_IN_MINUTE;

            this.updateUI(String(days).padStart(2, "0"), String(hours).padStart(2, "0"), String(minutes).padStart(2, "0"), String(seconds).padStart(2, "0"));
        };

        updateTimerDisplay();

        const timerInterval = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                localStorage.setItem(storageKey, remainingTime);
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                localStorage.removeItem(storageKey);
                if (typeof options.onFinish === "function") options.onFinish();
            }
        }, 1000);
    }

    updateUI(day, hour, minute, second) {
        if(this.labels){
            this.allCountdownDivs.forEach((parentDiv) => {
                parentDiv.querySelectorAll(".days").forEach((el) => (el.innerText = day + "d"));
                parentDiv.querySelectorAll(".hours").forEach((el) => (el.innerText = hour + "h"));
                parentDiv.querySelectorAll(".minutes").forEach((el) => (el.innerText = minute + "m"));
                parentDiv.querySelectorAll(".seconds").forEach((el) => (el.innerText = second + "s"));
            });
        }else{
            this.allCountdownDivs.forEach((parentDiv) => {
                parentDiv.querySelectorAll(".days").forEach((el) => (el.innerText = day));
                parentDiv.querySelectorAll(".hours").forEach((el) => (el.innerText = hour));
                parentDiv.querySelectorAll(".minutes").forEach((el) => (el.innerText = minute));
                parentDiv.querySelectorAll(".seconds").forEach((el) => (el.innerText = second));
            });
        }
    }
}
