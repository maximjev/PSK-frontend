import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { UserRoleEnum } from 'src/app/users/_models/enums/UserRoleEnum';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isAdmin: boolean;
  isOrganiser: boolean;
  isUser: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authenticationService: AuthenticationService) {
    this.setMenuVisibilityValues();
  }

  logout() {
    this.authenticationService.logout();
  }

  setMenuVisibilityValues() {
    const userRole = this.authenticationService.currentUserRole;
    this.isAdmin = userRole == UserRoleEnum.ROLE_ADMIN;
    this.isOrganiser = userRole == UserRoleEnum.ROLE_ORGANIZER;
    this.isUser = userRole == UserRoleEnum.ROLE_USER;
  }

}
