import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../modules/auth/services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{


    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let url: string = state.url;
        return this.checkUserLogin(next, url);
    }


    checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
        if (this.authService.isLoggedIn()) {
            const userRole = this.authService.getRole();
            if (route.data["role"] && route.data["role"] !== userRole) {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }
}
