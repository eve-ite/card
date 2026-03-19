let authentication = false;
let typing = false;
let username = "";
let password = "";

const terminal = document.getElementById("terminal");

const outputs = {
  "passwordCorrect": async () => {
    await typeLine("");
    await typeLine("............................................................................");
    await typeLine("");
    await typeLine("");
    await typeLine("AUTHENTICATION COMPLETE");
    await typeLine("");
    await typeLine("");
    await typeLine("3 FILES FOUND:");
    await typeLine("");
    await typeLine("cake.txt");
    await typeLine("hat.txt")
    await typeLine("note.txt");
    await typeLine("");
    await typeLine("*on a table, there is a piece of mango mousse cake accompanied by a tiger hat and a handwritten note.")
    await typeLine("");
    await typeLine("");
    await typeLine("TO OPEN A FILE, TYPE ITS NAME:")
    await typeLine("");
  },
  "passwordIncorrect": async () => {
    await typeLine("");
    await typeLine("............................................................................");
    await typeLine("");
    await typeLine("");
    await typeLine("AUTHENTICATION FAILED")
    await typeLine("PLEASE TRY AGAIN")
    await typeLine("");
    await typeLine("");
    await typeLine("");
    await typeLine("ENTER YOUR USERNAME AND PASSWORD:");
    await typeLine("");
  },
  "cake.txt": async () => {
    print("");
    print("");
    print("");
    print("");
    for (const layer of cake) {
      print(layer);
      await delay(200);
    }
    print("");
    print("");
    await typeLine("*a slice of mango mousse cake.");
    print("");
    print("");
  },
  "hat.txt": async () => {
    await typeLine("");
    await typeLine("");
    await typeLine("*a yellow hat with an embroidered tiger, perfect for chilly bay days.");
    await typeLine("");
    await typeLine("");
  },
  "note.txt": async () => {
    await typeLine("");
    await typeLine("");
    await typeLine("dear marley");
    await typeLine("");
    await typeLine("happy 28th birthday!!");
    await typeLine("i hope things are going well at the company, and that you have some time to relax and have fun");
    await typeLine("your film camera is on its way, along with some color negative film--let me know how the camera is!");
    await typeLine("i kind of want one now after doing all that research, though shooting in san fran is much more fun than in mississauga.");
    await typeLine("");
    await typeLine("i got you a tiger beanie, hope you saw it and like it!");
    await typeLine("the person who makes these design has really nice clay earrings too, and drops new ones every weekend.");
    await typeLine("unfortunately there is no real mango mousse cake, since we couldn't find a bakery mom liked that had full size cakes for ordering online,");
    await typeLine("but i hope you treat yourself nonetheless.");
    await typeLine("");
    await typeLine("i hope this little game was a bit of fun! i had some help from chatgpt but it was simple enough that i learned quite a bit.");
    await typeLine("let me know how the company is doing, and hopefully it doesn't bring you too much stress!");
    await typeLine("get good food and sleep, as much as you can :)");
    await typeLine("if you have a bit of time to call, let me know, it's been a while since we've talked.");
    await typeLine("mom is really happy that you catch up with her now, too.");
    await typeLine("i have been looking at summer positions, and would be really grateful to discuss that whenever you do have some time --");
    await typeLine("i am a bit less scared now to put myself out there but don't know where to start just yet.");
    await typeLine("i have been trying to learn new things though! anson recommended mech and i did learn some cad throughout the year,");
    await typeLine("but don't know how to find companies doing cool things.");
    await typeLine("oh and! i have received all my offers (though they are all canadian), so i'm feeling pretty eager for new learning.");
    await typeLine("");
    await typeLine("but that's enough of me! you have your big day, which i hope is fun and filled with laughter and joy");
    await typeLine("and i am so proud to call you my sister.");
    await typeLine("you're a constant source of inspiration and awe, and even when things get rough you still give it your all.");
    await typeLine("i wish you all the best in this next year, with your company, with your friends, with your health, and life as a whole.");
    await typeLine("");
    await typeLine("");
    await typeLine("catch up whenever you can!");
    await typeLine("happy birthday, marley!");
    await typeLine("");
    await typeLine("");
  }
}

const cake = [
  "                                                                       ",
  "                                  .                                    ",
  "                                .v .                                   ",
  "                               .cn ..                                  ",
  "                                .uwz                                   ",
  "                                 .m                                    ",
  "                                .JL.                                   ",
  "                                M  M        ...MMM                     ",
  "                                M  M ....MMMMMMMMMMMM                  ",
  "                                M  MMMMMMMMMMMMMMMMMMMMM               ",
  "                           ...MMM  MMMMMMMMMMMMMMMMMMMMMM              ",
  "                     ...oMMMMMMMM  MMMMMMMMMMMMMMMMMMMMMMM             ",
  "               ...oooMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM            ",
  "            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM           ",
  "            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM           ",
  "            MM                                          DWMM           ",
  "            MM                                          CKMM           ",
  "            MMJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIMM           ",
  "        ..owMMIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJIJMMxn.        ",
  "    .rc''   MM                                          JGMM  'imz..   ",
  "  ..M       MM                                          JGMM      M..  ",
  "  rM        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM       Mj  ",
  "   iM.                                                           .mM   ",
  "    'smMM..                                                ..vrMM'     ",
  "         ''iMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM'''         ",
  "                     '''''''''''''''''''''''''''''                     ",
  "                                                                       "
]

document.querySelector(".table-object").onclick = async () => {
    await goToScene("table");
    return;
};

document.querySelector(".box").onclick = async () => {
    await goToScene("table-blurry");
    return;
};

document.querySelector(".usb").onclick = async () => {
    await goToScene("black");
    await delay(1000);
    await goToScene("laptop-off");
    return;
};

document.querySelector(".dock").onclick = async () => {
    await goToScene("laptop-loading");
    await delay(2000);
    await goToScene("black");
    await delay(1000);
    await goToScene("terminal");
    authentication = false;
    await delay(1000);
    await startTerminal();
    return;
};

async function goToScene(sceneId) {
  const current = document.querySelector(".scene.active");
  const next = document.getElementById(sceneId);
  if (sceneId != "terminal") {
    if (current) current.classList.remove("active");
  }

  await delay(50); // allows fade-out to start

  next.classList.add("active");

  return;
}

const output = document.querySelector(".terminal-output");

function createPrompt() {

  const line = document.createElement("div");
  line.className = "terminal-line";

  const prompt = document.createElement("span");
  prompt.textContent = "anon@Marleys-MacBook-Air ~ % ";

  const input = document.createElement("input");
  input.className = "terminal-input";

  line.appendChild(prompt);
  line.appendChild(input);

  output.appendChild(line);

  terminal.scrollTop = terminal.scrollHeight;

  input.focus();

  input.addEventListener("keydown", async function(e) {

    if (e.key !== "Enter") return;

    if (typing) return;

    const command = input.value;
    input.disabled = true;

    const text = document.createElement("span");
    text.textContent = command;
    input.replaceWith(text);

    await handleCommand(command);

  });

  return;

}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function print(text) {
  output.innerHTML += text + "<br>";
  output.scrollTop = output.scrollHeight;
  terminal.scrollTop = terminal.scrollHeight;
  return;
}

async function startTerminal() {
  output.innerHTML = ""; // clear previous text

  await typeLine("BOOTING FROM USB...");
  await typeLine("");
  await delay(400);
  await typeLine("..............................................................................................................");
  await typeLine("");
  await typeLine("");
  await delay(300);
  await typeLine("EXECUTABLE FOUND");
  await typeLine("");
  await delay(400);
  await typeLine("LOADING PROGRAM...");
  await typeLine("");
  await delay(400);
  await typeLine("..............................................................................................................");
  await typeLine("");
  await typeLine("");
  await delay(300);
  await typeLine("ACCESSING DATA...");
  await typeLine("");
  await delay(150);
  await typeLine("AUTHENTICATION REQUIRED");
  await typeLine("");
  await typeLine("");
  await delay(150);
  await typeLine("USERNAME:");
  await typeLine("");
  createPrompt();
}

async function handleCommand(input) {
    if (!authentication) {
      if (username === "") {
        username = input;
        await typeLine("");
        await typeLine("PASSWORD:");
        await typeLine("");
      }
      else {
        password = input;
        if (username === "mXiong" && password === "31.5") {
          authentication = true;
          await outputs["passwordCorrect"]();
        }
        else {
          username = "";
          password = "";
          await outputs["passwordIncorrect"]();
        }
      }
    }
    else {
      const message = outputs[input];
      if (message) {
        await message();
      } else {
        await typeLine("");
        await typeLine("COMMAND NOT FOUND");
        await typeLine("")
        await typeLine("PLEASE TRY AGAIN:");
        await typeLine("");
      }
    }
  createPrompt();
  return;
}


async function typeLine(text, speed = 5) {

  typing = true;

  for (let i = 0; i < text.length; i++) {

    if (!typing) { // skip animation
      output.innerHTML += text.slice(i);
      terminal.scrollTop = terminal.scrollHeight;
      break;
    }
    
    output.innerHTML += text[i];
    output.scrollTop = output.scrollHeight;
    terminal.scrollTop = terminal.scrollHeight;
    await delay(speed);
  }

  output.innerHTML += "<br>";

  output.scrollTop = output.scrollHeight;
  terminal.scrollTop = terminal.scrollHeight;

  typing = false;
  return;
}