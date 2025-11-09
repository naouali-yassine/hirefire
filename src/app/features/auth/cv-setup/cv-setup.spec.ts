import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSetupComponent } from './cv-setup.component';

describe('CvSetup', () => {
  let component: CvSetupComponent;
  let fixture: ComponentFixture<CvSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
