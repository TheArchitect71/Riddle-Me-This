import { Injectable } from '@angular/core';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  morality: boolean;


  constructor(private router: Router) {
    this.router = router;
   }


   test(q) {
    console.log(q);
   }
  // All your quiz logic exists here, Define your vairable here

  // selectAnswer() {
  //
  // }

  //  students = [
  //    {
  //      name: 'Josue',
  //      age: 25,
  //      morality: false
  //    },
  //    {
  //      name: 'Erick',
  //      age: 20,
  //      morality: false
  //    },
  //    {
  //      name: 'Michael',
  //      age: 35,
  //      morality: true
  //    }
  //  ];






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

  // selectAnswer() {
  //   this.message = '';
}
