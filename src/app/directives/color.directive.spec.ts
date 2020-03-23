import { ColorDirective } from './color.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

/* HostComponent: if we need to test template without component: */
@Component({
  template: `
  <p appColor="yellow">text 1</p>
  <p appColor>text 2</p>
  `
})
class HostColorComponent {}

describe('ColorDirective', () => {
  let fixture: ComponentFixture<HostColorComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorDirective, HostColorComponent ]
    });
    fixture = TestBed.createComponent(HostColorComponent);
    fixture.detectChanges();
  });
  it('should create an instance', () => {
    const directive = new ColorDirective(null);
    expect(directive).toBeTruthy();
  });
  it('should apply input color', () => {
    const de = fixture.debugElement.queryAll(By.css('p'))[0];
    expect(de.nativeElement.style.backgroundColor).toBe('yellow');
  });
  it('should apply default color', () => {
    const de = fixture.debugElement.queryAll(By.css('p'))[1];
    const directive = de.injector.get(ColorDirective);
    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
