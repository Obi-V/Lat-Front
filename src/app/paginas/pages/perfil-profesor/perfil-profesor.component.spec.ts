import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfesorComponent } from './perfil-profesor.component';

describe('PerfilProfesorComponent', () => {
  let component: PerfilProfesorComponent;
  let fixture: ComponentFixture<PerfilProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilProfesorComponent]
    });
    fixture = TestBed.createComponent(PerfilProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
