import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponente } from './about-componente';

describe('AboutComponente', () => {
  let component: AboutComponente;
  let fixture: ComponentFixture<AboutComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
