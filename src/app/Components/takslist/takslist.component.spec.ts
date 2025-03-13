import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakslistComponent } from './takslist.component';

describe('TakslistComponent', () => {
  let component: TakslistComponent;
  let fixture: ComponentFixture<TakslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
