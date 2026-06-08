const lessons = [
  {
    id: "mindset",
    step: 1,
    title: "Programming mindset",
    track: "all",
    level: "Warm-up",
    soccer: "A program is a game plan. Each instruction is like a pass: clear, ordered, and aimed at a result.",
    concept:
      "Computers follow exact instructions. Your job is to break a goal into small plays the computer can run in order.",
    drill:
      "Write down the steps for taking a penalty kick. Then turn each step into one simple command.",
    code: {
      python: `# Python: a simple game plan
player = "Mia"
action = "shoot"
print(player + " will " + action)`,
      java: `// Java: a simple game plan
public class Main {
  public static void main(String[] args) {
    String player = "Mia";
    String action = "shoot";
    System.out.println(player + " will " + action);
  }
}`
    }
  },
  {
    id: "variables",
    step: 2,
    title: "Variables and data types",
    track: "all",
    level: "First touch",
    soccer: "A variable is a labeled locker. You store a player's name, number, stamina, or score so you can use it later.",
    concept:
      "Variables hold values. Python figures out the type as you assign it. Java asks you to name the type up front.",
    drill:
      "Create variables for a player name, jersey number, goals scored, and whether the team is winning.",
    code: {
      python: `player_name = "Alex"
jersey_number = 10
goals = 2
is_winning = True

print(player_name, "has", goals, "goals")`,
      java: `public class Main {
  public static void main(String[] args) {
    String playerName = "Alex";
    int jerseyNumber = 10;
    int goals = 2;
    boolean isWinning = true;

    System.out.println(playerName + " has " + goals + " goals");
  }
}`
    }
  },
  {
    id: "conditionals",
    step: 3,
    title: "Conditionals",
    track: "all",
    level: "Decision making",
    soccer: "An if statement is like choosing whether to pass, dribble, or shoot based on what the defender does.",
    concept:
      "Conditionals let your program choose different paths when a condition is true or false.",
    drill:
      "If the player is inside the box, print 'shoot'. Else if a teammate is open, print 'pass'. Otherwise print 'dribble'.",
    code: {
      python: `inside_box = True
teammate_open = False

if inside_box:
    print("shoot")
elif teammate_open:
    print("pass")
else:
    print("dribble")`,
      java: `public class Main {
  public static void main(String[] args) {
    boolean insideBox = true;
    boolean teammateOpen = false;

    if (insideBox) {
      System.out.println("shoot");
    } else if (teammateOpen) {
      System.out.println("pass");
    } else {
      System.out.println("dribble");
    }
  }
}`
    }
  },
  {
    id: "loops",
    step: 4,
    title: "Loops",
    track: "all",
    level: "Repetition",
    soccer: "A loop is a training drill: do the same passing pattern again and again until you finish the reps.",
    concept:
      "Loops repeat work. Use for loops when you know the count. Use while loops when you repeat until a condition changes.",
    drill:
      "Print five practice shots. Then use a while loop that keeps training until stamina reaches zero.",
    code: {
      python: `for shot in range(1, 6):
    print("Shot", shot)

stamina = 3
while stamina > 0:
    print("Sprint drill")
    stamina -= 1`,
      java: `public class Main {
  public static void main(String[] args) {
    for (int shot = 1; shot <= 5; shot++) {
      System.out.println("Shot " + shot);
    }

    int stamina = 3;
    while (stamina > 0) {
      System.out.println("Sprint drill");
      stamina--;
    }
  }
}`
    }
  },
  {
    id: "collections",
    step: 5,
    title: "Lists, arrays, and maps",
    track: "all",
    level: "Team sheet",
    soccer: "A collection is your roster. Lists keep players in order. Maps connect a player to stats like goals or assists.",
    concept:
      "Collections store multiple values. Python lists and dictionaries are flexible. Java arrays, lists, and maps are typed.",
    drill:
      "Store three players, print each player, then store goals by player name and print one player's goals.",
    code: {
      python: `players = ["Sam", "Jordan", "Riley"]
for player in players:
    print(player)

goals_by_player = {"Sam": 1, "Jordan": 3, "Riley": 0}
print(goals_by_player["Jordan"])`,
      java: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Main {
  public static void main(String[] args) {
    List<String> players = new ArrayList<>();
    players.add("Sam");
    players.add("Jordan");
    players.add("Riley");

    for (String player : players) {
      System.out.println(player);
    }

    Map<String, Integer> goalsByPlayer = new HashMap<>();
    goalsByPlayer.put("Sam", 1);
    goalsByPlayer.put("Jordan", 3);
    goalsByPlayer.put("Riley", 0);

    System.out.println(goalsByPlayer.get("Jordan"));
  }
}`
    }
  },
  {
    id: "functions",
    step: 6,
    title: "Functions and methods",
    track: "all",
    level: "Set pieces",
    soccer: "A function is a set-piece routine. You name it once, practice it, then call it whenever the match situation appears.",
    concept:
      "Functions package reusable steps. They can receive inputs, perform work, and return a result.",
    drill:
      "Write a function that takes shots and goals, then returns the conversion rate.",
    code: {
      python: `def conversion_rate(goals, shots):
    if shots == 0:
        return 0
    return goals / shots

rate = conversion_rate(3, 8)
print(rate)`,
      java: `public class Main {
  public static void main(String[] args) {
    double rate = conversionRate(3, 8);
    System.out.println(rate);
  }

  static double conversionRate(int goals, int shots) {
    if (shots == 0) {
      return 0;
    }
    return (double) goals / shots;
  }
}`
    }
  },
  {
    id: "objects",
    step: 7,
    title: "Object-oriented programming",
    track: "all",
    level: "Positions",
    soccer: "A class is the blueprint for a player role. An object is one actual player with a name, position, and behavior.",
    concept:
      "Classes group data and actions. Java uses classes heavily. Python supports classes but also lets you write simpler scripts.",
    drill:
      "Create a Player class with a name, position, and introduce method.",
    code: {
      python: `class Player:
    def __init__(self, name, position):
        self.name = name
        self.position = position

    def introduce(self):
        return self.name + " plays " + self.position

player = Player("Avery", "midfield")
print(player.introduce())`,
      java: `class Player {
  private String name;
  private String position;

  Player(String name, String position) {
    this.name = name;
    this.position = position;
  }

  String introduce() {
    return name + " plays " + position;
  }
}

public class Main {
  public static void main(String[] args) {
    Player player = new Player("Avery", "midfield");
    System.out.println(player.introduce());
  }
}`
    }
  },
  {
    id: "debugging",
    step: 8,
    title: "Debugging",
    track: "all",
    level: "Match review",
    soccer: "Debugging is watching film after a match. Find where the play broke down, then adjust one decision at a time.",
    concept:
      "Read errors carefully, reproduce the problem, inspect values, make a small fix, and test again.",
    drill:
      "Break one example on purpose, read the error, and write down what line failed and why.",
    code: {
      python: `score = "2"
bonus = 1

# Fix: convert score to an integer before adding.
total = int(score) + bonus
print(total)`,
      java: `public class Main {
  public static void main(String[] args) {
    String score = "2";
    int bonus = 1;

    // Fix: parse score before adding.
    int total = Integer.parseInt(score) + bonus;
    System.out.println(total);
  }
}`
    }
  }
];

const drills = [
  {
    title: "Build a scoreboard",
    analogy: "Like the stadium screen, your program tracks both teams and updates the score after goals.",
    steps: [
      "Create variables for home team, away team, home score, and away score.",
      "Write a function that adds one goal to the selected team.",
      "Print the score as 'Home 2 - Away 1'.",
      "Stretch goal: stop the program from accepting negative scores."
    ]
  },
  {
    title: "Choose the best pass",
    analogy: "Your code scans teammates like a midfielder looking up before releasing the ball.",
    steps: [
      "Create a list of teammates with distance and open-space ratings.",
      "Loop through the list and choose the teammate with the highest rating.",
      "Print the chosen pass target.",
      "Stretch goal: ignore any teammate marked as offside."
    ]
  },
  {
    title: "Track a training session",
    analogy: "A coach logs reps, completion, and improvement after every drill.",
    steps: [
      "Create a collection of drills such as passing, shooting, and sprinting.",
      "Store how many reps were completed for each drill.",
      "Calculate the total reps.",
      "Stretch goal: print the drill with the most reps."
    ]
  }
];

const quizQuestions = [
  {
    title: "Variables",
    question: "In soccer terms, what is a variable?",
    options: [
      "A labeled locker that stores a value",
      "A referee that stops invalid plays",
      "A stadium where code is displayed"
    ],
    answer: 0,
    feedback: "Correct. A variable stores a value you can use later."
  },
  {
    title: "Conditionals",
    question: "Which coding idea matches deciding whether to pass, dribble, or shoot?",
    options: ["A loop", "A conditional", "A collection"],
    answer: 1,
    feedback: "Exactly. Conditionals choose a path based on the situation."
  },
  {
    title: "Loops",
    question: "A passing drill repeated 20 times is most like which structure?",
    options: ["A class", "A loop", "A string"],
    answer: 1,
    feedback: "Nice. Loops repeat instructions just like repeated reps."
  },
  {
    title: "Classes",
    question: "A Player blueprint that creates many players is most like what?",
    options: ["A class", "A boolean", "A comment"],
    answer: 0,
    feedback: "Right. A class is the blueprint; each player made from it is an object."
  }
];

const glossary = [
  {
    term: "Variable",
    soccer: "Player locker",
    meaning: "A named place to store one value."
  },
  {
    term: "String",
    soccer: "Name on a jersey",
    meaning: "Text data such as a player's name or team chant."
  },
  {
    term: "Boolean",
    soccer: "Yes-or-no call",
    meaning: "A true or false value, like whether a player is offside."
  },
  {
    term: "Conditional",
    soccer: "Tactical decision",
    meaning: "Code that chooses one path when a condition is true."
  },
  {
    term: "Loop",
    soccer: "Repeated drill",
    meaning: "Code that repeats while a count or condition says to continue."
  },
  {
    term: "Function",
    soccer: "Set-piece routine",
    meaning: "Reusable code that can take inputs and produce an output."
  },
  {
    term: "Collection",
    soccer: "Roster or stat sheet",
    meaning: "A structure that stores multiple values."
  },
  {
    term: "Class",
    soccer: "Position blueprint",
    meaning: "A template for creating objects with data and behavior."
  },
  {
    term: "Debugging",
    soccer: "Film review",
    meaning: "Finding and fixing problems in your code."
  }
];

const state = {
  filter: "all",
  selectedQuiz: 0,
  completed: new Set(JSON.parse(localStorage.getItem("soccerCodeCoachCompleted") || "[]"))
};

const lessonGrid = document.querySelector("#lessonGrid");
const completedCount = document.querySelector("#completedCount");
const totalCount = document.querySelector("#totalCount");
const progressBall = document.querySelector("#progressBall");
const coachMessage = document.querySelector("#coachMessage");
const drillSelect = document.querySelector("#drillSelect");
const drillDetails = document.querySelector("#drillDetails");
const quizTitle = document.querySelector("#quizTitle");
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");
const glossaryGrid = document.querySelector("#glossaryGrid");
const nextQuiz = document.querySelector("#nextQuiz");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function visibleLessons() {
  if (state.filter === "all") {
    return lessons;
  }

  return lessons.filter((lesson) => lesson.track === state.filter || lesson.track === "all");
}

function renderLessons() {
  lessonGrid.innerHTML = visibleLessons()
    .map((lesson) => {
      const isDone = state.completed.has(lesson.id);
      const defaultLanguage = state.filter === "java" ? "java" : "python";

      return `
        <article class="lesson-card" data-lesson-id="${lesson.id}">
          <div class="lesson-card-header">
            <div>
              <div class="tags">
                <span class="tag">Step ${lesson.step}</span>
                <span class="tag">${lesson.level}</span>
              </div>
              <h3>${lesson.title}</h3>
              <p>${lesson.soccer}</p>
            </div>
          </div>
          <div class="lesson-body">
            <h4>Coach explains</h4>
            <p>${lesson.concept}</p>
            <h4>Training drill</h4>
            <p>${lesson.drill}</p>
            <div class="code-tabs" role="tablist" aria-label="${lesson.title} code examples">
              <button class="code-tab ${defaultLanguage === "python" ? "active" : ""}" type="button" data-language="python">Python</button>
              <button class="code-tab ${defaultLanguage === "java" ? "active" : ""}" type="button" data-language="java">Java</button>
            </div>
            <pre><code>${escapeHtml(lesson.code[defaultLanguage])}</code></pre>
            <button class="complete-button ${isDone ? "done" : ""}" type="button" data-complete="${lesson.id}">
              ${isDone ? "Completed" : "Mark this step complete"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  updateProgress();
}

function updateProgress() {
  const completed = lessons.filter((lesson) => state.completed.has(lesson.id)).length;
  const total = lessons.length;
  const percentage = total === 0 ? 0 : completed / total;

  completedCount.textContent = completed;
  totalCount.textContent = total;
  progressBall.style.left = `calc(${percentage * 100}% - ${percentage * 28}px + 6px)`;

  if (completed === 0) {
    coachMessage.textContent = "Pick a module to begin your warm-up.";
  } else if (completed < total / 2) {
    coachMessage.textContent = "Good first touch. Keep stacking clean reps.";
  } else if (completed < total) {
    coachMessage.textContent = "You are controlling midfield now. Finish the next modules.";
  } else {
    coachMessage.textContent = "Full-time whistle: all modules complete. Start building your own match app.";
  }
}

function saveProgress() {
  localStorage.setItem("soccerCodeCoachCompleted", JSON.stringify([...state.completed]));
}

function renderDrills() {
  drillSelect.innerHTML = drills
    .map((drill, index) => `<option value="${index}">${drill.title}</option>`)
    .join("");
  renderSelectedDrill();
}

function renderSelectedDrill() {
  const drill = drills[Number(drillSelect.value) || 0];
  drillDetails.innerHTML = `
    <h3>${drill.title}</h3>
    <p>${drill.analogy}</p>
    <ul>
      ${drill.steps.map((step) => `<li>${step}</li>`).join("")}
    </ul>
  `;
}

function renderQuiz() {
  const quiz = quizQuestions[state.selectedQuiz];
  quizTitle.textContent = quiz.title;
  quizQuestion.textContent = quiz.question;
  quizFeedback.textContent = "";
  quizOptions.innerHTML = quiz.options
    .map(
      (option, index) => `
        <button class="quiz-option" type="button" data-option="${index}">
          ${option}
        </button>
      `
    )
    .join("");
}

function renderGlossary() {
  glossaryGrid.innerHTML = glossary
    .map(
      (item) => `
        <article class="glossary-item">
          <span class="tag">${item.soccer}</span>
          <h3>${item.term}</h3>
          <p>${item.meaning}</p>
        </article>
      `
    )
    .join("");
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.track;
    renderLessons();
  });
});

lessonGrid.addEventListener("click", (event) => {
  const completeButton = event.target.closest("[data-complete]");
  const tabButton = event.target.closest(".code-tab");

  if (completeButton) {
    const lessonId = completeButton.dataset.complete;
    if (state.completed.has(lessonId)) {
      state.completed.delete(lessonId);
    } else {
      state.completed.add(lessonId);
    }

    saveProgress();
    renderLessons();
  }

  if (tabButton) {
    const card = tabButton.closest(".lesson-card");
    const lesson = lessons.find((item) => item.id === card.dataset.lessonId);
    const language = tabButton.dataset.language;

    card.querySelectorAll(".code-tab").forEach((button) => button.classList.remove("active"));
    tabButton.classList.add("active");
    card.querySelector("code").textContent = lesson.code[language];
  }
});

drillSelect.addEventListener("change", renderSelectedDrill);

quizOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-option]");
  if (!button) {
    return;
  }

  const quiz = quizQuestions[state.selectedQuiz];
  const selected = Number(button.dataset.option);
  const isCorrect = selected === quiz.answer;

  quizOptions.querySelectorAll(".quiz-option").forEach((optionButton) => {
    optionButton.classList.remove("correct", "incorrect");
    optionButton.disabled = true;
  });

  button.classList.add(isCorrect ? "correct" : "incorrect");
  quizOptions.querySelector(`[data-option="${quiz.answer}"]`).classList.add("correct");
  quizFeedback.textContent = isCorrect
    ? quiz.feedback
    : `Almost. Think like a coach: ${quiz.feedback}`;
});

nextQuiz.addEventListener("click", () => {
  state.selectedQuiz = (state.selectedQuiz + 1) % quizQuestions.length;
  renderQuiz();
});

renderLessons();
renderDrills();
renderQuiz();
renderGlossary();
