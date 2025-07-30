import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFacesnap } from './single-facesnap';

describe('Facesnap', () => {
  let component: SingleFacesnap;
  let fixture: ComponentFixture<SingleFacesnap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleFacesnap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFacesnap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
