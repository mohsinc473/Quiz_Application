var i = 0;
var score = 0;
function button() {
  var btn1 = document.createElement("button");
  var addbtn = document.getElementById("addbtn");
  var btnText = document.createTextNode("Next");
  addbtn.appendChild(btn1);
  btn1.appendChild(btnText);
  btn1.setAttribute("onclick", "play()");
  btn1.setAttribute("class", "btn btn-warning");
}

var quizQuestion = [
  {
    Question1: {
      Q1: "Which of the following is true for coaxial cables?",
      Ans:
        "Coaxial cables provide effective protection against EMI during data transmissions.",
      a: "It uses copper wires, which are good conductors of electricity.",
      b:
        "Coaxial cables provide effective protection against EMI during data transmissions.",
      c: "It uses light rays instead of electricity to transmit data",
      d:
        "It can be differentiated into two categories, single-mode and multimode",
    },
  },
  {
    Question1: {
      Q1:
        "In case of fiber-optic cables, which transmission mode is used for transmitting data over long distances?",
      Ans: "Single mode",
      a: "Infrared",
      b: "Radio",
      c: "Single mode",
      d: "Multimode",
    },
  },
  {
    Question1: {
      Q1:
        "What is the maximum bandwidth that can be supported by fiber optics cable?",
      Ans: "2000 Mbps",
      a: "10 Mbps",
      b: "2000 Mbps",
      c: "50 Mbps",
      d: "100 Mbps",
    },
  },
  {
    Question1: {
      Q1:
        "Media Access Control (MAC) and Logical Link Control (LLC) are two sublayers of _________________.",
      Ans: "Data Link layer",
      a: "Session layer",
      b: "Network layer",
      c: "Data Link layer",
      d: "Transport layer",
    },
  },
  {
    Question1: {
      Q1:
        "Radio waves and microwaves are used in which of the following communications?",
      Ans: "Wireless",
      a: "Voice over IP",
      b: "IP Telephony",
      c: "Enterprise",
      d: "Wireless",
    },
  },
];

function play() {
  var addbtn = document.getElementById("addbtn");
  addbtn.innerHTML = " ";
  var start = document.getElementById("start");
  start.innerHTML = " ";

  if (i === 5) {
    alert("Your score in quiz was: " + score);
    resultCard();
  }

  var ques1 = document.getElementById("ques");
  ques1.innerHTML = quizQuestion[i].Question1.Q1;

  var Option1 = document.getElementById("option1");
  Option1.setAttribute("class", "btn btn-light m-2 rounded");
  Option1.innerHTML = quizQuestion[i].Question1.a;
  var Option2 = document.getElementById("option2");
  Option2.setAttribute("class", "btn btn-light m-2 rounded");
  Option2.innerHTML = quizQuestion[i].Question1.b;
  var Option3 = document.getElementById("option3");
  Option3.setAttribute("class", "btn btn-light m-2 rounded");
  Option3.innerHTML = quizQuestion[i].Question1.c;
  var Option4 = document.getElementById("option4");
  Option4.setAttribute("class", "btn btn-light m-2 rounded");
  Option4.innerHTML = quizQuestion[i].Question1.d;

  button();
}

function result(e) {
  var ans = e.firstChild.nodeValue;
  if (ans === quizQuestion[i].Question1.Ans) {
    e.setAttribute("class", "btn btn-success");
    score++;
  } else {
    e.setAttribute("class", "btn btn-danger");
  }
  i++;
}

function resultCard() {
  var home = document.getElementById("home");
  var res = document.createElement("a");
  var textRes = document.createTextNode("Go to home");
  res.appendChild(textRes);
  res.setAttribute("href", "index.html");
  home.appendChild(res);
}
