import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { ResultComponent } from './result.component';
it('renders result without starter dependency errors',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(ResultComponent);f.detectChanges();expect(f.componentInstance).toBeTruthy();});
