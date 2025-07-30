import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesnapList } from './facesnap-list';

describe('FacesnapList', () => {
  let component: FacesnapList;
  let fixture: ComponentFixture<FacesnapList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacesnapList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacesnapList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
