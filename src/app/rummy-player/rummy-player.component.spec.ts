import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RummyPlayerComponent } from './rummy-player.component';

describe('RummyPlayerComponent', () => {
  let component: RummyPlayerComponent;
  let fixture: ComponentFixture<RummyPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RummyPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RummyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
