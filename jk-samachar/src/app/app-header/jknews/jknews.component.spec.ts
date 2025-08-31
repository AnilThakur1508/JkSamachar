import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JknewsComponent } from './jknews.component';

describe('JknewsComponent', () => {
  let component: JknewsComponent;
  let fixture: ComponentFixture<JknewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JknewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JknewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
