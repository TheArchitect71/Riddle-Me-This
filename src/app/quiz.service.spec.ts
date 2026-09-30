import { QuizService } from './quiz.service';
import { Router } from '@angular/router';
describe('quiz scoring',()=>{let q:QuizService;let navigate:jasmine.Spy;beforeEach(()=>{navigate=jasmine.createSpy();q=new QuizService({navigate} as unknown as Router);});

it('returns all six original outcomes',()=>{for(let index=0;index<6;index++){q.reset();const morality=index<3;q.questions[0].selectAnswer=morality;for(const question of q.questions.slice(1)){if(question.morality===morality)question.selectAnswer='ABCDEF'[index];}q.tallyResult();expect(q.finalResult).toEqual(q.results[index]);expect(navigate).toHaveBeenCalledWith(['/result']);}});
it('replay clears old scores and inactive branch answers',()=>{q.questions[0].selectAnswer=true;q.questions[1].selectAnswer='A';q.tallyResult();q.tallyResult();expect(q.letterATally).toBe(1);q.questions[0].selectAnswer=false;q.questions[2].selectAnswer='E';q.tallyResult();expect(q.finalResult.result).toBe('The Joker');expect(q.letterATally).toBe(0);q.reset();expect(q.finalResult).toBeUndefined();expect(q.tallyray).toEqual([]);expect(q.questions.every(x=>x.selectAnswer===null)).toBeTrue();});});
