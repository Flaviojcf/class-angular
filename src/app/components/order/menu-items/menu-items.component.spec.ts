import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemsComponent } from './menu-items.component';

describe('MenuItemsComponent', () => {
  let component: MenuItemsComponent;
  let fixture: ComponentFixture<MenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of inputs', () => {
    fixture.componentInstance.items = [
      { name: 'Charred Octopus', price: 25.99 },
      { name: 'Steamed Mussels', price: 21.99 },
      { name: 'Ricotta Gnocchi', price: 15.99 },
    ];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    const itemLabels = compiled.getElementsByTagName('label');
    expect(itemLabels.length).toEqual(3);
  });

  it('should call an updateItem function when a checkbox is selected or unselected', () => {
    fixture.componentInstance.items = [
      { name: 'Charred Octopus', price: 25.99 },
      { name: 'Steamed Mussels', price: 21.99 },
      { name: 'Ricotta Gnocchi', price: 15.99 },
    ];
    fixture.detectChanges();
    const changeSpy = spyOn(fixture.componentInstance, 'updateItem');
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.getElementsByTagName('input')[0];
    input.click();
    fixture.detectChanges();
    expect(changeSpy).toHaveBeenCalled();
  });
});