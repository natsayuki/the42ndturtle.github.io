const fs = {
  '~': {
    projects: {
      type: 'dir',
      TazerChess: {
        type: 'project',
        description: "A project inspired by Michael Reeves. Play chess on chess.com, but you get electrocuted every time you blunder",
        content: `
        The aim of this project was to help me improve at chess. I am too lazy to actually learn how to play,
        so I decided to try learning through negative reinforcement.

        This project consists of three main parts: the browser plug-in, the server, and the electrocution box.
        The browser plug is made for FireFox, and scrapes any active chess game in chess.com for the PGN.
        PGN stands for portable game notation, and is used to transcribe chess games into a legible shorthands.
        The PGN is sent from the browser to a server running on the same computer.
        This server launches a child Python script who's only purpose is to serve as an interface between the server and the Stockfish chess engine.
        Stockfish returns a number that is a summed up evaluation of the game. The more positive the number, the more white is favored in the current board state,
        the more negative the number, the more black is favored in the current board state.
        These evaluations are tracked and if a large enough change in lead happens depending on who is more favored at the time, it is
        counted as a blunder by the server. At this point, the electrocution box is called.

        The electrocution box has a 3D printed housing and contains a RaspberryPi, mobile battery bank, relay board, and TENS unit.
        The RaspberryPi runs a simple Node.JS server which is listening to see if its IP is called.
        If so, the Pi opens the relays for a set amount of time, allowing the TENS unit to electrocute the player.

        `,
        github: "https://github.com/the42ndturtle/TazerChess",
      },
      PatkerPlot: {
        type: 'project',
        description: 'A simple UI for chart.js',
        content: 'patker plot content',
        github: "https://github.com/the42ndturtle/patkerplot",
        link: 'https://patkerplot.herokuapp.com'
      },
      nickisnotnuzlocke: {
        type: 'project',
        description: 'A project that allows for twitch chat to interact with Pokemon GBA games',
        content: 'nickisnotnuzlocke content',
        github: 'https://github.com/the42ndturtle/nickisnotnuzlocke'
      },
      'idle-game': {
        type: 'project',
        description: 'an unfinished idle game that takes place in space',
        content: 'idle game content',
        github: 'https://github.com/the42ndturtle/idlegame',
        link: 'https://idletestgame.herokuapp.com',
      },
      'multiplayer-snake': {
        type: 'project',
        description: 'a simple local multiplayer snake game',
        content: 'multiplayer snake content',
        github: 'https://github.com/the42ndturtle/snake',
        link: 'https://multisnakegame.herokuapp.com',
      },
      'typing-game': {
        type: 'project',
        description: 'a typing game with a twist! all the prompts are generated from my friends\'s high school essays which contain many spelling errors',
        content: 'typing game content',
        github: "https://github.com/the42ndturtle/learntotypewithpatker",
        link: 'https://learntotypewithpatker.herokuapp.com'
      },
      needle: {
        type: 'project',
        description: 'a simulation that displays the ratio of random points in a circle inscribed in a square is close to pi',
        content: 'needle sim content',
        github: "https://github.com/the42ndturtle/needle",
        link: 'https://needlepi.herokuapp.com'
      },
      raycaster: {
        type: 'project',
        description: 'a rudimentary raycasting game engine like Wolfenstein 3D',
        content: 'raycaster content',
        github: "https://github.com/the42ndturtle/PatkerRay"
      },
      framebyframe: {
        type: 'project',
        description: 'a multiplayer game where players take turns drawing frames of one final animation',
        content: 'frame by frame content',
        github: "https://github.com/the42ndturtle/framebyframe",
        link: 'https://fbfgame.herokuapp.com'
      },
      vnengine: {
        type: 'project',
        description: 'a rudimentary visual novel game engine for web a mobile platforms',
        content: 'patker story content',
        github: "https://github.com/the42ndturtle/patkerstory",
        link: "https://patkerstory.herokuapp.com"
      },
      rpg: {
        type: 'project',
        description: 'a simple rpg demonstration for a class',
        content: "patker quest content",
        github: "https://github.com/the42ndturtle/PatkerQuest64",
        link: "https://PatkerQuest64.herokuapp.com"
      },
      studyapp: {
        type: 'project',
        description: 'a flash card studying app where users could share information sets',
        content: 'study app content',
        github: "https://github.com/the42ndturtle/studyapp"
      },
      tetris: {
        type: 'project',
        description: 'a bad version of Tetris with a (hardly functional) lobby and multiplayer system',
        content: 'patker blocks content',
        github: "https://github.com/the42ndturtle/tetris",
        link: "https://patkerblocks.herokuapp.com"
      },
      life: {
        type: 'project',
        description: 'a recreation of "Conway\'s Game of Life" simulation',
        content: "life content",
        github: "https://github.com/the42ndturtle/life",
        link: "https://lifesimapp.herokuapp.com",
      },
      "PTC": {
        type: 'project',
        description: 'a bare bones trading card game featuring my friend parker\'s face on every card',
        content: 'PTC content',
        github: "https://github.com/the42ndturtle/PTC"
      },
      chat: {
        type: 'project',
        description: 'a demo chat program featuring emotes',
        content: 'patkerchat content',
        github: 'https://github.com/the42ndturtle/PatkerChat'
      },
      'TurtleIsleRPG': {
        type: 'project',
        description: 'an unfinished RPG made with a friend',
        content: "turtle isle rpg content",
        github: "https://github.com/the42ndturtle/TurtleIsleRPG"
      },
      'SpanishStudier': {
        type: 'project',
        description: 'a simple flash card app with voice detection for practicing Spanish',
        content: 'spanish studier content',
        github: "https://github.com/the42ndturtle/SpanishStudier"
      },

    },
    'about-me.txt': {
      type: 'file',
      content: "Hello! My name is Madeline! I am 19 and currently attending college at NC State university for Computer Science. I passionate about programming and video games, though I am bad at both! I have been programming since I was 11, and I am mainly self taught, though I've done my fair share of official stuff as well!"
    },
    experience: {
      type: 'dir',
      'unity-internship.txt': {
        type: 'file',
        content: 'I worked at an internship for Unity. I helped work on, produce, and quality check the "Create with Code" Unity course. It is the first official first party Unity course, and is intended to help introduce the basics of Unity and C#. During my work on the project I had to learn how to work with a team using a tool called Asana. My job was to go through the course in its entirety and double check everything, make changes, and fix errors, bugs, and spelling mistakes.'
      },
      'creative-internship.txt': {
        type: 'file',
        content: ''
      },
      'IMACS.txt': {
        type: 'file',
        content: '',
      },
      'summer-ventures.txt': {
        type: 'file',
        content: '',
      },
      'independant-study.txt': {
        type: 'file',
        content: '',
      },
      'teacher.txt': {
        type: 'file',
        content: '',
      }
    }
  },
}
