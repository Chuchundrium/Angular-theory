import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingComponent } from './routing.component';
import { Subject } from 'rxjs';
import {ActivatedRoute, Params, Router, RouterOutlet} from '@angular/router';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

/* mock class for Router tests: */
class RouterStub {
  navigate(path: string[]) {}
}
/* mock class for ActivatedRoute tests: */
class ActivatedRouteStub {
  // params: Observable<Params>;
  private subject = new Subject<Params>();
  push(params: Params) {
    this.subject.next(params);
  }
  get params() {
    return this.subject.asObservable();
  }
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        /* for using mock class */
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be defined', () => {
    expect(component).toBeDefined();
  });
  it('shoud navigate to posts if go back', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.goBack();
    expect(spy).toHaveBeenCalledWith(['/posts']);
  });
  it('should navigate to 404 if id = 0', () => {
    const router: RouterStub = TestBed.get(Router);
    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    const spy = spyOn(router, 'navigate');

    route.push({id: 0});

    expect(spy).toHaveBeenCalledWith(['/404']);
  });
  it('should have router-outlet directive', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });
});
