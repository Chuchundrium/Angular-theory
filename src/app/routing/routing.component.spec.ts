import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponent } from './routing.component';

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

/* Webpack does compileComponents by default
** ---> we don't need async and compileComponents here
// async is a function but decorator
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ]
    })
    .compileComponents(); // for connect component's template and *.ts
  }));
*/

/* use configureTestingModule here
** without async and compileComponents */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ]
    });
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); /* will write by the hands */
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  });
  ** or: */
  it('should be defined', () => {
    expect(component).toBeDefined();
  });
});
