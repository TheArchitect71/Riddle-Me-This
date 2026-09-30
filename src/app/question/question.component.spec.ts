import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { QuestionComponent } from './question.component';
it('renders question without starter dependency errors',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(QuestionComponent);f.detectChanges();expect(f.componentInstance).toBeTruthy();});
