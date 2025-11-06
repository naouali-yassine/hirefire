import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSetup } from './cv-setup';

describe('CvSetup', () => {
  let component: CvSetup;
  let fixture: ComponentFixture<CvSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvSetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvSetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
