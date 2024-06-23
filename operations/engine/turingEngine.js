const BLANK = "",
  LEFT = "<",
  RIGHT = ">",
  STAY = "-",
  HEAD_START = 100;

class Transition {
  constructor() {
    this.stateFrom = "";
    this.stateTo = "";
    this.read = [];
    this.update = [];
    this.move = [];
  }
}

class Machine {
  constructor() {
    this.machine = [[], [], [], [], [], []];
    this.head = [
      HEAD_START,
      HEAD_START,
      HEAD_START,
      HEAD_START,
      HEAD_START,
      HEAD_START,
    ];
    this.state = "";

    this.rule = [];
    this.initState = "";
    this.acceptState = "";

    this.cache_recognizer = "";
    this.have_last_recognizer = false;
  }

  pushRight(item, level) {
    if (this.machine[level][this.head[level]] == null) {
      this.machine[level][this.head[level]] = BLANK;
    }
    this.machine[level][this.head[level]] = item;
    this.head[level]++;
  }

  pushStay(item, level) {
    this.machine[level][this.head[level]] = item;
  }

  pushLeft(item, level) {
    if (this.head[level] == 0) {
      throw new Error("pushLeft array index violation!");
    }
    this.machine[level][this.head[level]] = item;
    this.head[level]--;
  }

  compileRule(rule) {
    rule = rule.split("\n");
    for (const i in rule) {
      if (rule[i].slice(0, 2) == "i:") {
        this.initState = rule[i].slice(2);
      } else if (rule[i].slice(0, 2) == "a:") {
        this.acceptState = rule[i].slice(2);
      } else if (rule[i] == "") {
      } else {
        var transition = new Transition();
        if (!this.have_last_recognizer) {
          this.have_last_recognizer = true;
          this.cache_recognizer = rule[i];
        } else {
          var recognizer = this.cache_recognizer;
          this.have_last_recognizer = false;
          this.cache_recognizer = "";

          recognizer = recognizer.split(",");
          var mover = rule[i].split(",");

          transition.stateFrom = recognizer[0];
          transition.stateTo = mover[0];

          transition.read = recognizer.slice(1);
          transition.update = mover.slice(1, transition.read.length + 1);
          transition.move = mover.slice(transition.read.length + 1);

          this.rule.push(transition);
        }
      }
    }
  }

  initInput(input) {
    input = input.split("");
    for (const i in input) {
      this.pushRight(input[i], 0);
    }
    this.head[0] = HEAD_START;
  }

  prepareToRun(rule, input, name) {
    console.log("Name:", name);
    console.log("Input:", input);
    this.compileRule(rule);
    this.state = this.initState;
    this.initInput(input);

    console.log(rule);

    var numTuringType = this.rule[0].move.length;
  }

  run() {
    var running = true;
    var correctRead = true;
    var update = "";
    var foundRule = false;
    var iteration = 0;
    var interval = 0;

    var timer = setInterval(() => {
      foundRule = false;
      for (const i in this.rule) {
        if (this.rule[i].stateFrom == this.state) {
          for (const j in this.rule[i].read) {
            if (
              (this.rule[i].read[j] == "_" &&
                this.machine[j][this.head[j]] == null) ||
              (this.rule[i].read[j] == "_" &&
                this.machine[j][this.head[j]] == "") ||
              this.rule[i].read[j] == this.machine[j][this.head[j]]
            ) {
            } else {
              correctRead = false;
              break;
            }
          }
          if (correctRead) {
            foundRule = true;
            for (const j in this.rule[i].update) {
              update = this.rule[i].update[j];
              if (update == "_") update = "";
              if (this.rule[i].move[j] == LEFT) {
                this.pushLeft(update, j);
              } else if (this.rule[i].move[j] == RIGHT) {
                this.pushRight(update, j);
              } else {
                this.pushStay(update, j);
              }
            }
            this.state = this.rule[i].stateTo;
            break;
          }
          correctRead = true;
        }
      }
      iteration++;
      if (!foundRule) {
        running = false;
      }
      if (!running) {
        console.log("Accepted: " + (this.state == this.acceptState));
        if (this.state != this.acceptState)
          console.log("Last State: " + this.state);
        console.log("Output:");
        var formattedMachineOutput = [];
        for (const i in this.machine) {
          if (this.machine[i].length > 0) {
            console.log(
              "[" + i + "]:",
              this.machine[i].join("").split("").join("")
            );
            formattedMachineOutput.push(
              this.machine[i].join("").split("").join("")
            );
          }
        }
        turingDoneHandler(
          this.state == this.acceptState,
          formattedMachineOutput
        );
        clearInterval(timer);
      }
    }, interval);
  }
}
