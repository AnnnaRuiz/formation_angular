import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Facesnap } from './facesnap';

describe('Facesnap', () => {
  let component: Facesnap;
  let fixture: ComponentFixture<Facesnap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Facesnap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Facesnap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
