import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lat';

  private authService = inject(AuthService)
  private router = inject(Router)

  public finishedAuthCheck = computed<boolean>(()=>{

    if(this.authService.authStatus() === AuthStatus.checking) return false

    return true
  })

  public authStatusChangedEffect = effect(()=>{
    console.log(this.authService.authStatus())
  })
}
