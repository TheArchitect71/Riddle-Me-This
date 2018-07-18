import { Injectable } from '@angular/core';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  morality: boolean;
  //Tally placeholders
  letterATally = 0;
  letterBTally = 0;
  letterCTally = 0;
  letterDTally = 0;
  letterETally = 0;
  letterFTally = 0;

  tallyray: any;
  finalResult: any;

  finalCharacter: Object;


  constructor(private router: Router) {
    this.router = router;
  }
  reset() {
    console.log(this.tallyray = []);
    for (let i = 0; i < this.questions.length; i++) {
      this.questions[i].selectAnswer = null;
    }
  }
  tallyResult() {
    for (let i = 1; i < this.questions.length; i++) {
      //Tallies the properties
      if (this.questions[i].selectAnswer == "A") {
        this.letterATally++;
      } else if (this.questions[i].selectAnswer == "B") {
        this.letterBTally++;
      } else if (this.questions[i].selectAnswer == "C") {
        this.letterCTally++;
      } else if (this.questions[i].selectAnswer == "D") {
        this.letterDTally++;
      } else if (this.questions[i].selectAnswer == "E") {
        this.letterETally++;
      } else if (this.questions[i].selectAnswer == "F") {
        this.letterFTally++;
      }
    }

    //Finds the max and where the max is

    this.tallyray = [this.letterATally, this.letterBTally, this.letterCTally, this.letterDTally, this.letterETally, this.letterFTally];

    let topVal = Math.max(...this.tallyray);

    let finalIndex = this.tallyray.indexOf(topVal);

    this.finalResult = this.results[finalIndex];

    this.router.navigate(['/result']);


  }

  results = [
    //Hero
    {
      topValue: 1,
      title: "You are an Alien",
      result: "Superman"
    },
    {
      topValue: 2,
      title: "The Police Department could use your help",
      result: "Batman"
    },
    {
      topValue: 3,
      title: "Girl Power",
      result: "Wonder Woman"
    },
    //Villain
    {
      topValue: 4,
      title: "The world is your oyster",
      result: "Lex Luther"
    },
    {
      topValue: 5,
      title: "Have you ever danced with the devil in the pale moonlight",
      result: "The Joker"
    },
    {
      topValue: 6,
      title: "Stay wild my friend",
      result: "Cheetah"
    }
  ]



  questions = [
    {
      id: 1,
      title: 'Would you rather...',
      selectAnswer: "",
      choices: [
        {
          answer: 'Die as a Hero',
          value: true
        },
        {
          answer: 'Live long enough to become the Villain',
          value: false
        },
      ]
    },
    {
      id: 2,
      morality: true,
      title: 'Where do you call home?',
      selectAnswer: null,
      choices: [
        {
          answer: 'The 3rd planet in the Solar System',
          value: 'A',
          morality: true
        },
        {
          answer: 'In an Urban Area',
          value: 'B'
        },
        {
          answer: 'Isoleted from society',
          value: 'C'
        },
      ]
    },
    {
      id: 3,
      morality: false,
      title: "Where do you call home?",
      selectAnswer: null,
      choices: [
        {
          answer: "Penthouse",
          value: "D"
        },
        {
          answer: "An Asylum",
          value: "E"
        },
        {
          answer: "The Jungle",
          value: "F"
        },
      ]
    },
    {
      id: 4,
      morality: true,
      title: "How do you force your will?",
      selectAnswer: null,
      choices: [
        {
          answer: "WTF SUPERPOWERS",
          value: "A"
        },
        {
          answer: "Gadgets Galore",
          value: "B"
        },
        {
          answer: "Warrior, Brute Force",
          value: "C"
        },
      ]
    },
    {
      id: 5,
      morality: false,
      title: "How do you force your will?",
      selectAnswer: null,
      choices: [
        {
          answer: "Money & Wise-Ass mind",
          value: "D"
        },
        {
          answer: "Sadistic Mindset",
          value: "E"
        },
        {
          answer: "Anamilistic",
          value: "F"
        },
      ]
    },
    {
      id: 6,
      morality: true,
      title: "How do you get around town?",
      selectAnswer: null,
      choices: [
        {
          answer: "Fly like a Bird",
          value: "A"
        },
        {
          answer: "Badass Car",
          value: "B"
        },
        {
          answer: "See through Jet",
          value: "C"
        },
      ]
    },
    {
      id: 7,
      morality: false,
      title: "How do you get around town?",
      selectAnswer: null,
      choices: [
        {
          answer: "Limo",
          value: "D"
        },
        {
          answer: "Whatever car you can get your hands on",
          value: "E"
        },
        {
          answer: "Walk it like you talk it",
          value: "F"
        },
      ]
    },
  ];
}
