var stopwatch = {
  seconds: 0,
  laps: [],
  timerInterval: null,
  running: false,
  timerTextId: "",
  lapsListId: "",
  /**
   * Init Stopwatch
   *
   * @param {String} timerTextId HTML conitainer ID to display Timer string
   * @param {String} lapsListId HTML conitainer ID to display laps
   * @param {String} startBtnId HTML button ID to trigger start
   * @param {String} stopBtnId HTML button ID to trigger stop
   * @param {String} resetBtnId HTML button ID to trigger reset
   * @param {String} lapBtnId HTML button ID to trigger addLap
   */
  init(timerTextId, lapsListId, startBtnId, stopBtnId, resetBtnId, lapBtnId) {
    const self = this;

    if (
      !timerTextId ||
      !lapsListId ||
      !resetBtnId ||
      !stopBtnId ||
      !startBtnId ||
      !lapBtnId
    ) {
      console.error("stopwatch.init needs all button #IDs");
      return;
    }

    this.timerTextId = timerTextId;
    this.lapsListId = lapsListId;

    document.getElementById(resetBtnId).onclick = (event) => {
      event.preventDefault();
      self.reset();
    };
    document.getElementById(startBtnId).onclick = (event) => {
      event.preventDefault();
      self.start();
    };
    document.getElementById(stopBtnId).onclick = (event) => {
      event.preventDefault();
      self.stop();
    };
    document.getElementById(lapBtnId).onclick = (event) => {
      event.preventDefault();
      self.addLap();
    };

    this.setTimerText();
  },
  /**
   * Reset Stopwatch
   */
  reset() {
    clearInterval(this.timerInterval);
    this.seconds = 0;
    this.laps = [];
    this.running = false;
    this.setTimerText();
    this.printLaps();
  },
  /**
   * Start/Resume Stopwatch
   */
  start() {
    var self = this;

    if (!self.running) {
      self.running = true;
      self.timerInterval = setInterval(() => {
        self.seconds++;
        self.setTimerText();
      }, 10);
    } else {
      window.alert("timer already running");
    }
  },
  /**
   * Stop Stopwatch
   */
  stop() {
    if (this.running) {
      this.running = false;
      clearInterval(this.timerInterval);
    } else {
      window.alert("timer not running");
    }
  },
  /**
   * add lap
   */
  addLap() {
    if (!this.running) {
      window.alert("The timer is not running!");
      return;
    }
    this.laps.push(this.seconds);
    this.printLaps();
  },
  /**
   * Prints the lap list in the specified #lapsListId element
   */
  printLaps() {
    const self = this;
    const list = document.getElementById(this.lapsListId);
    list.innerHTML = "";
    this.laps.forEach((lap, index) => {
      const li = document.createElement("li");
      const lapString = self.seccondsToTime(lap);
      li.innerText = `Lap ${index + 1}: ${lapString}`;
      list.appendChild(li);
    });
  },
  /**
   * Prints the timer tesxt in the specified #timerTextId element
   */
  setTimerText() {
    document.getElementById(this.timerTextId).innerHTML = this.seccondsToTime(
      this.seconds
    );
  },
  /**
   * Helper methd to format secconds to time string
   *
   * @param {Number} seccondsCount
   */
  seccondsToTime(seccondsCount) {
    var min = Math.floor((seccondsCount % (60 * 60 * 24)) / (60 * 60 * 100));
    var sec = Math.floor((seccondsCount % (60 * 60)) / 100);
    var cent = Math.floor(seccondsCount % 100);

    return `${min}:${this.pad(sec)}:${this.pad(cent)}`;
  },
  /**
   * Helper method to add a 0 to the seconds
   * @param {Number} num
   */
  pad(num) {
    var s = "00" + num;
    return s.substr(s.length - 2);
  },
};
