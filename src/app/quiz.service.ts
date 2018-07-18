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

  // getResult () {
  //   total
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] > )
  //   } 

   results = [
      //Hero
      {
          minValue: .33,
          maxValue: .44,
          Hero: true,
          title: "You are an Alien",
          result: "Superman"
      },
      {
          minValue: .33,
          maxValue: .65,
          Hero: true,
          title: "The Detective",
          result: "Batman"
      },
      {
          minValue: .66,
          maxValue: 1,
          Hero: true,
          result: "Wonder Woman"
      },
      //Villain
      {
          minValue: 1.1,
          maxValue: null,
          Villain: false,
          result: "Lex"
      },
      {
          minValue: 1.33,
          maxValue: null,
          Villain: false,
          result: "The Joker"
      },
      {
          minValue: 1.66,
          maxValue: null,
          Villain: false,
          result: "Cheetah"
      }
    ]

    getResult(){
      let x: any 
      if (x <= .44) {
        return this.results;
      } else if ( x <= .77) {
        return this.results;
      } else {
        return this.results;
      }
    }    
  }
// selectAnswer() {
  
// }

//   questions = [
//     {
//       id: 1,
//       title: "Would you rather...",
//       selectAnswer: "",
//       choices: [
//         {
//           answer: "Die as a Hero",
//           value: true
//         },
//         {
//           answer: "Live long enough to become the Villain",
//           value: false
//         },
//         ]
//     },
//     {
//       id: 2,  
//       title: "Where do you call home?",
//         choices: [
//           {
//           answer: "The 3rd planet in the Solar System",
//           value: null
//           },
//           {
//             answer: "In an Urban Area",
//             value: null
//           },
//           {
//             answer: "Isoleted from society",
//             value: null
//           },
//         ]
//     },
//     {
//       id: 3,
//       title: "Where do you call home?",
//       choices: [
//         {
//         answer: "Penthouse",
//         value: null
//       },
//       {
//         answer: "An Asylum",
//         value: null
//       },
//       {
//         answer: "The Jungle",
//         value: null
//       },
//       ]
//     },
//     {
//       id: 4,
//       title: "How do you force your will?",
//       choices: [
//         {
//           answer: "WTF SUPERPOWERS",
//           value: null
//         },
//         {
//           answer: "Gadgets Galore",
//           value: null
//         },
//         {
//           answer: "Warrior, Brute Force",
//           value: null
//         },
//         ]
//     },
//     {
//         id: 5,
//         title: "How do you force your will?",
//         choices: [
//           {
//           answer: "Money & Wise-Ass mind",
//           value: null
//           },
//           {
//             answer: "Sadistic Mindset",
//             value: null
//           },
//           {
//             answer: "Anamilistic",
//             value: null
//           },
//         ]
//       },
//       {
//         id: 6,
//         title: "How do you get around town?",
//         choices: [
//           {
//           answer: "Fly like a Bird",
//           value: null
//           },
//           {
//             answer: "Badass Car",
//             value: null
//           },
//           {
//             answer: "See through Jet",
//             value: null
//           },
//         ]
//       },
//       {
//         id: 7,
//         title: "How do you get around town?",
//         choices: [
//           {
//             answer: "Limo",
//             value: null
//           },
//           {
//             answer: "Whatever car you can get your hands on",
//             value: null
//           },
//           {
//             answer: "Walk it like you talk it",
//             value: null
//           },
//         ]
//       },
//   ];

// }
