import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "../modules/auth/services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
            return false;
        }

        const userRole = this.authService.getRole();
        const requiredRole = route.data['role'];
        if (requiredRole && requiredRole !== userRole) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}

