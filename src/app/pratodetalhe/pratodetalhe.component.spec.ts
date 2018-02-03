import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratodetalheComponent } from './pratodetalhe.component';

describe('PratodetalheComponent', () => {
  let component: PratodetalheComponent;
  let fixture: ComponentFixture<PratodetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratodetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratodetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
