import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassBox } from './glass-box';

describe('GlassBox', () => {
  let component: GlassBox;
  let fixture: ComponentFixture<GlassBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
