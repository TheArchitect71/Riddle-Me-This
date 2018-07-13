import { Injectable } from '@angular/core';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private router: Router) {
    this.router = router;
   }
  // All your quiz logic exists here, Define your vairable here
  
selectAnswer() {
  
}

  questions = [
    {
      id: 1,
      title: "Would you rather...",
      selectAnswer: "",
      choices: [
        {
          answer: "Die as a Hero",
          value: true
        },
        {
          answer: "Live long enough to become the Villain",
          value: false
        },
        ]
    },
    {
      id: 2,  
      title: "Where do you call home?",
        choices: [
          {
          answer: "The 3rd planet in the Solar System",
          value: null
          },
          {
            answer: "In an Urban Area",
            value: null
          },
          {
            answer: "Isoleted from society",
            value: null
          },
        ]
    },
    {
      id: 3,
      title: "Where do you call home?",
      choices: [
        {
        answer: "Penthouse",
        value: null
      },
      {
        answer: "An Asylum",
        value: null
      },
      {
        answer: "The Jungle",
        value: null
      },
      ]
    },
    {
      id: 4,
      title: "How do you force your will?",
      choices: [
        {
          answer: "WTF SUPERPOWERS",
          value: null
        },
        {
          answer: "Gadgets Galore",
          value: null
        },
        {
          answer: "Warrior, Brute Force",
          value: null
        },
        ]
    },
    {
        id: 5,
        title: "How do you force your will?",
        choices: [
          {
          answer: "Money & Wise-Ass mind",
          value: null
          },
          {
            answer: "Sadistic Mindset",
            value: null
          },
          {
            answer: "Anamilistic",
            value: null
          },
        ]
      },
      {
        id: 6,
        title: "How do you get around town?",
        choices: [
          {
          answer: "Fly like a Bird",
          value: null
          },
          {
            answer: "Badass Car",
            value: null
          },
          {
            answer: "See through Jet",
            value: null
          },
        ]
      },
      {
        id: 7,
        title: "How do you get around town?",
        choices: [
          {
            answer: "Limo",
            value: null
          },
          {
            answer: "Whatever car you can get your hands on",
            value: null
          },
          {
            answer: "Walk it like you talk it",
            value: null
          },
        ]
      },
  ];

}
