// 1
const statement = document.querySelector("#statement");
const optionButtons = document.querySelector("#options").children;
const explanation = document.querySelector("#explanation");
const nextButton = document.querySelectorAll(".b")[2];
const lblScore = document.querySelector("#lblScore");

// 2
const fact = {
  factStatement: "Is the content more important than the way things are said?",
  answer: true,
  exp: "Thanks to Socratic irony, the greek realized this",
};

const fact2 = {
  factStatement: "Is reality a unification of our mental perceptions, According to Platonism?",
  answer: false,
  exp: "Plato clearly divided the world of ideas (doxa) from the world of reality",
};

const fact3 = {
  factStatement: "Can two opinions have equal objective metaphysical value?",
  answer: false,
  exp: "Aristotle teaches us one of them will always be more accurate in its description of objective reality, even by a single detail",
};

const fact4 = {
  factStatement: "Do metaphysical entities have an extrinsic exitence from our mental perception?",
  answer: true,
  exp: "Aristotelian immanent realism proves our opinions do not modify reality, it exists by itself and not us thinking about it",
};

const fact5 = {
  factStatement: "Were the four virtues of stoicism wisdom, courage, tolerance and justice?",
  answer: false,
  exp: "The third virtue Aurelius inherited from stoicism's teachings was temperance",
};

const fact6 = {
  factStatement: "was the concept of time first defined between the 4th and 5th centuries?",
  answer: true,
  exp: "By Saint Augustine, way earlier than most think",
};

const fact7 = {
  factStatement: "Can we imagine something even better than our mental ideal of perfection?",
  answer: false,
  exp: "The Anselm of Canterbury uses this as his final argument to prove the existance of the concept of God",
};

const fact8 = {
  factStatement: "Is the concept of truth objective?",
  answer: true,
  exp: "By rescuing aristotelian metaphysical realism, Thomas Aquinas finally shielded humanity from relativism",
};

const fact9 = {
  factStatement: "Was Ockham a relativist?",
  answer: false,
  exp: "He never stated that we cannot achieve objectiveness in our understanding of metaphysical reality, he was a conceptualist.",
};

const fact10 = {
  factStatement: "Does substance come before accident?",
  answer: true,
  exp: "indeed, you cannot be a specific human if you are not human first, as scotus reminds us",
};

const fact11 = {
  factStatement: "Are external metaphysical entities the main significates of language?",
  answer: true,
  exp: "Roger Bacon explicitly stated mental concepts such as grammar aren't equivalent to the motivation of the speaker (sign-interpreter)",
};

const fact12 = {
  factStatement: "Can a relativist separate his mental perception from metaphysical reality?",
  answer: false,
  exp: "Never since they are unified, the sum of our mental perceptions define reality according to Kant",
};

const fact13 = {
  factStatement: "Is hedonism the absence of purpose in human existence?",
  answer: false,
  exp: "That would be Nietzche's nihilism, hedonism states the purpose of existence is personal pleasure, both led to the french revolution and WWII",
};

const fact14 = {
  factStatement: "Are moral judgements subjective acording to relativists?",
  answer: true,
  exp: "For example Hume considered they express only our feelings rather than an obesrvation of metaphysical reality",
};

const fact15 = {
  factStatement: "Did rationalists think all of our ideas come from senses?",
  answer: false,
  exp: "rationalists tend to think that some ideas are innate",
};

const fact16 = {
  factStatement: "Does the mind have any mental concept in it before experience through the senses according to british empiricism?",
  answer: true,
  exp: "Locke stated that our minds only absorb ideas through our five senses he never denied the existence of prior inherent capabilities which are trigger afterwards",
};

const fact17 = {
  factStatement: "Should one trust those that give us logical reasons to do so and doubt those that do not according to relativism?",
  answer: false,
  exp: "Descartes ignored the legacy of scholasticism, hence why relativism states to doubt everything regardless of logic as part of the mechanistic model of science",
};

const fact18 = {
  factStatement: "Is the modern mind aristotelian?",
  answer: false,
  exp: "Relativism ended up reverting us back to a much more skeptical version of platonic thought rather than aristotelian since most individuals cannot recognize immanent existence of metaphysical entities",
};

const fact19 = {
  factStatement: "Is reality a specific combination of molecules and particles?",
  answer: true,
  exp: "No amount of thinking can change objective existence, as metaphysical realism has told us time and time again",
};

const fact20 = {
  factStatement: "Is any kind of national socialism relativist by default?",
  answer: true,
  exp: "Yes, since individuality can only be absorbed by the state after we deny the existence of a mentally external objective reality",
};

// 4
const disable = function (parameter) {
  return parameter.setAttribute("disabled", "");
};
// disable(optionButtons[0])

const enable = function (parameter) {
  return parameter.removeAttribute("disabled");
};
// enable(optionButtons[0])

// 5
const isCorrect = function (guessString) {
  return (idx3 = (idx3 + 1) % poem3.length), guessString === poem3[idx3];
};
// 6

/* ALWAYS ATTACH THE .ADDEVENTLISTENER(S) TO THE -INDEX-

NOTE - IMPORTANT!!!: I DISCOVERED IT ONLY WORKS ON THE INDEX, ALWAYS ATTACH THE .ADDEVENTLISTENER(S) TO THE -INDEX-, NOT THE STRUCTURE OF THE HTML COLLECTION (ARRAY), I REPEAT E.G: optionButtons WITHOUT [i] DIDN'T WORK 1ST TIME.   */
let idx3 = -1;

const poem3 = [
  fact.answer.toString(),
  fact2.answer.toString(),
  fact3.answer.toString(),
  fact4.answer.toString(),
  fact5.answer.toString(),
  fact6.answer.toString(),
  fact7.answer.toString(),
  fact8.answer.toString(),
  fact9.answer.toString(),
  fact10.answer.toString(),
  fact11.answer.toString(),
  fact12.answer.toString(),
  fact13.answer.toString(),
  fact14.answer.toString(),
  fact15.answer.toString(),
  fact16.answer.toString(),
  fact17.answer.toString(),
  fact18.answer.toString(),
  fact19.answer.toString(),
  fact20.answer.toString(),
];

/* QUIZ SCORE */
let score = 1;

// 8
for (let i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener("click", () => {
    if (isCorrect(optionButtons[i].value)) {
      return (
        optionButtons[i].classList.add("correct"),
        (lblScore.innerText = " "),
        (score = score + 1)
      );
    } else {
      return optionButtons[i].classList.add("incorrect");
    }
  });
}

// changes the statement text
let idx = 0;

const poem = [
  fact2.factStatement,
  fact3.factStatement,
  fact4.factStatement,
  fact5.factStatement,
  fact6.factStatement,
  fact7.factStatement,
  fact8.factStatement,
  fact9.factStatement,
  fact10.factStatement,
  fact11.factStatement,
  fact12.factStatement,
  fact13.factStatement,
  fact14.factStatement,
  fact15.factStatement,
  fact16.factStatement,
  fact17.factStatement,
  fact18.factStatement,
  fact19.factStatement,
  fact20.factStatement,
];

// cycles through statements
nextButton.addEventListener("click", () => {
  disable(nextButton), (statement.textContent = poem[idx]);
  idx = (idx + 1) % poem.length;
});

// little looping trick so once the user has gone through the whole array it always goes back to the initial question instead of second one, syncing statement and explanation
poem.push(fact.factStatement);

// reappear different text answer
let idx2 = 0;

const poem2 = [
  fact.exp,
  fact2.exp,
  fact3.exp,
  fact4.exp,
  fact5.exp,
  fact6.exp,
  fact7.exp,
  fact8.exp,
  fact9.exp,
  fact10.exp,
  fact11.exp,
  fact12.exp,
  fact13.exp,
  fact14.exp,
  fact15.exp,
  fact16.exp,
  fact17.exp,
  fact18.exp,
  fact19.exp,
  fact20.exp,
];

//By default, disable next button until the user has answered the first question
disable(nextButton);

for (let i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener("click", () => {
    return (
      (explanation.textContent = poem2[idx2]),
      (idx2 = (idx2 + 1) % poem2.length),
      disable(optionButtons[0]),
      disable(optionButtons[1]),
      enable(nextButton)
    );
  });
}

/* Independent cycle stopping/quiz lock at the end, this global variable stores data regarding how many times -nextButton- is clicked through -clickFunc()- it is used in tandem with the conditional of the next event listener, which will ONLY REACTIVATE the buttons if they have been clicked LESS THAN the total amount of questions, basically ties -enable(optionButtons[0])- and -enable(optionButtons[1])- to -nextButton-'s amount of user clicks to stop a reset of the quiz, effectively locking it down in the most effective way, since it just prevents them from triggerign inside the conditional */
let count = 0;

function clickFunc() {
  count += 1;
}

// resets buttons colors & re-enables them after clicking next question
nextButton.addEventListener("click", () => {
  if (count <= 18) {
    return (
      enable(optionButtons[0]),
      enable(optionButtons[1]),
      optionButtons[0].classList.remove("incorrect", "correct"),
      optionButtons[1].classList.remove("incorrect", "correct"),
      (explanation.textContent = ""));
  } else if (count <= 19 && count > 18) {
      enable(optionButtons[0]),
      enable(optionButtons[1]),
      optionButtons[0].classList.remove("incorrect", "correct"),
      optionButtons[1].classList.remove("incorrect", "correct"),
      (explanation.textContent = ""),
      (nextButton.textContent = "Finish Quiz")
  } else if (count > 19 && score <= 8) {
    optionButtons[0].classList.remove("incorrect", "correct"),
      optionButtons[1].classList.remove("incorrect", "correct"),
      (explanation.textContent = "End of the Quiz!"),
      (statement.textContent = `Too bad, your final score is ${score - 1}/20`);
  } else if (count > 19 && score <= 16) {
    optionButtons[0].classList.remove("incorrect", "correct"),
      optionButtons[1].classList.remove("incorrect", "correct"),
      (explanation.textContent = "End of the Quiz!"),
      (statement.textContent = `Not too shabby, your final score is ${score - 1}/20`);
  } else if (count > 19 && score <= 20) {
    optionButtons[0].classList.remove("incorrect", "correct"),
      optionButtons[1].classList.remove("incorrect", "correct"),
      (explanation.textContent = "End of the Quiz!"),
      (statement.textContent = `Almost there, your final score is ${score - 1}/20`);
  } else if (count > 19 && score === 21) {
    optionButtons[0].classList.remove("incorrect", "correct"),
      optionButtons[1].classList.remove("incorrect", "correct"),
      (explanation.textContent = "End of the Quiz!"),
      (statement.textContent = `Well done player, perfect score!!! ${score - 1}/20`),
      document.querySelector(".confetti-container").classList.add("container"),
      document.querySelector(".conf1").classList.add("confetti"),
      document.querySelector(".conf2").classList.add("confetti"),
      document.querySelector(".conf3").classList.add("confetti"),
      document.querySelector(".conf4").classList.add("confetti"),
      document.querySelector(".conf5").classList.add("confetti"),
      document.querySelector(".conf6").classList.add("confetti"),
      document.querySelector(".conf7").classList.add("confetti"),
      document.querySelector(".conf8").classList.add("confetti"),
      document.querySelector(".conf9").classList.add("confetti"),
      document.querySelector(".conf10").classList.add("confetti"),
      document.querySelector(".conf11").classList.add("confetti"),
      document.querySelector(".conf12").classList.add("confetti"),
      document.querySelector(".conf13").classList.add("confetti"),
      document.querySelector(".conf14").classList.add("confetti"),
      document.querySelector(".conf15").classList.add("confetti"),
      document.querySelector(".conf16").classList.add("confetti"),
      document.querySelector(".conf17").classList.add("confetti"),
      document.querySelector(".conf18").classList.add("confetti"),
      document.querySelector(".conf19").classList.add("confetti"),
      alert("CONGRATULATIONS CHAMP 😎!!!");
  }
});

//==================================================================

/* SPECIAL BACKGROUND EFFECT*/
var w = (c.width = window.innerWidth),
  h = (c.height = window.innerHeight),
  ctx = c.getContext("2d"),
  minDist = 10,
  maxDist = 30,
  initialWidth = 10,
  maxLines = 100,
  initialLines = 4,
  speed = 5,
  lines = [],
  frame = 0,
  timeSinceLast = 0,
  dirs = [
    // straight x, y velocity
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    // diagonals, 0.7 = sin(PI/4) = cos(PI/4)
    [0.7, 0.7],
    [0.7, -0.7],
    [-0.7, 0.7],
    [-0.7, -0.7],
  ],
  starter = {
    // starting parent line, just a pseudo line

    x: w / 2,
    y: h / 2,
    vx: 0,
    vy: 0,
    width: initialWidth,
  };

function init() {
  lines.length = 0;

  for (var i = 0; i < initialLines; ++i) lines.push(new Line(starter));

  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, w, h);

  // if you want a cookie ;)
  // ctx.lineCap = 'round';
}
function getColor(x) {
  return "hsl( hue, 80%, 50% )".replace("hue", (x / w) * 360 + frame);
}
function anim() {
  window.requestAnimationFrame(anim);

  ++frame;

  ctx.shadowBlur = 0;
  ctx.fillStyle = "rgba(0,0,0,.02)";
  ctx.fillRect(0, 0, w, h);
  ctx.shadowBlur = 0.5;

  for (var i = 0; i < lines.length; ++i)
    if (lines[i].step()) {
      // if true it's dead

      lines.splice(i, 1);
      --i;
    }

  // spawn new

  ++timeSinceLast;

  if (lines.length < maxLines && timeSinceLast > 10 && Math.random() < 0.5) {
    timeSinceLast = 0;

    lines.push(new Line(starter));

    // cover the middle;
    ctx.fillStyle = ctx.shadowColor = getColor(starter.x);
    ctx.beginPath();
    ctx.arc(starter.x, starter.y, initialWidth, 0, Math.PI * 2);
    ctx.fill();
  }
}

function Line(parent) {
  this.x = parent.x | 0;
  this.y = parent.y | 0;
  this.width = parent.width / 1.25;

  do {
    var dir = dirs[(Math.random() * dirs.length) | 0];
    this.vx = dir[0];
    this.vy = dir[1];
  } while (
    (this.vx === -parent.vx && this.vy === -parent.vy) ||
    (this.vx === parent.vx && this.vy === parent.vy)
  );

  this.vx *= speed;
  this.vy *= speed;

  this.dist = Math.random() * (maxDist - minDist) + minDist;
}
Line.prototype.step = function () {
  var dead = false;

  var prevX = this.x,
    prevY = this.y;

  this.x += this.vx;
  this.y += this.vy;

  --this.dist;

  // kill if out of screen
  if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) dead = true;

  // make children :D
  if (this.dist <= 0 && this.width > 1) {
    // keep yo self, sometimes
    this.dist = Math.random() * (maxDist - minDist) + minDist;

    // add 2 children
    if (lines.length < maxLines) lines.push(new Line(this));
    if (lines.length < maxLines && Math.random() < 0.5)
      lines.push(new Line(this));

    // kill the line
    if (Math.random() < 0.2) dead = true;
  }

  ctx.strokeStyle = ctx.shadowColor = getColor(this.x);
  ctx.beginPath();
  ctx.lineWidth = this.width;
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(prevX, prevY);
  ctx.stroke();

  if (dead) return true;
};

init();
anim();

window.addEventListener("resize", function () {
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  starter.x = w / 2;
  starter.y = h / 2;

  init();
});