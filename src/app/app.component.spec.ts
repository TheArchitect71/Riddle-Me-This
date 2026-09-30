import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
it('boots the retained routing shell',async()=>{await TestBed.configureTestingModule({imports:[AppModule]}).compileComponents();const f=TestBed.createComponent(AppComponent);f.detectChanges();expect(f.componentInstance.title).toBe('app');expect(f.nativeElement.querySelector('router-outlet')).toBeTruthy();});
