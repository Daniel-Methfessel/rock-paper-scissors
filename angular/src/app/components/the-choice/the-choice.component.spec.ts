import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheChoiceComponent } from './the-choice.component';
import { TranslateModule } from '@ngx-translate/core';

describe('TheChoiceComponent', () => {
  let component: TheChoiceComponent;
  let fixture: ComponentFixture<TheChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        TheChoiceComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
