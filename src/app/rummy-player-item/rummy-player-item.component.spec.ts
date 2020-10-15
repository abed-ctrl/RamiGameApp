import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RummyPlayerItemComponent } from './rummy-player-item.component';

describe('RummyPlayerItemComponent', () => {
  let component: RummyPlayerItemComponent;
  let fixture: ComponentFixture<RummyPlayerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RummyPlayerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RummyPlayerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
