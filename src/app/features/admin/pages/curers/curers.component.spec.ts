import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurersComponent } from './curers.component';

describe('CurersComponent', () => {
  let component: CurersComponent;
  let fixture: ComponentFixture<CurersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
