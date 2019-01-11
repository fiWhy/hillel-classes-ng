import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicGoalComponent } from './topic-goal.component';

describe('TopicGoalComponent', () => {
  let component: TopicGoalComponent;
  let fixture: ComponentFixture<TopicGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
