import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingComponent } from './routing.component';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

/* mock classes for Router and ActivatedRoute tests: */
class RouterStub {
  navigate(path: string[]) {}
}
class ActivatedRouteStub {
  params: Observable<Params>;
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      providers: [
        /* for using mock class */
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
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
});
