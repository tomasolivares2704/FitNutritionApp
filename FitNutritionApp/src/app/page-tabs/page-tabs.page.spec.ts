import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTabsPage } from './page-tabs.page';

describe('PageTabsPage', () => {
  let component: PageTabsPage;
  let fixture: ComponentFixture<PageTabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
