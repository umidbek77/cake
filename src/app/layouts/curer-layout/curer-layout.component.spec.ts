import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurerLayoutComponent } from './curer-layout.component';

describe('CurerLayoutComponent', () => {
  let component: CurerLayoutComponent;
  let fixture: ComponentFixture<CurerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurerLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
