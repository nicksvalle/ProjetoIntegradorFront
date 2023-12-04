import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoLogoComponent } from './botao-logo.component';

describe('BotaoLogoComponent', () => {
  let component: BotaoLogoComponent;
  let fixture: ComponentFixture<BotaoLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoLogoComponent]
    });
    fixture = TestBed.createComponent(BotaoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
