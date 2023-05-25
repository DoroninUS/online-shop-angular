import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAllListComponent } from './product-all-list.component';

describe('ProductAllListComponent', () => {
  let component: ProductAllListComponent;
  let fixture: ComponentFixture<ProductAllListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAllListComponent]
    });
    fixture = TestBed.createComponent(ProductAllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
