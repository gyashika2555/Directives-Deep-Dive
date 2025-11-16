import { Component, computed, inject} from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { AuthComponent } from "./auth/auth.component";
import { LearningResourcesComponent } from "./Learning-resources/Learning.component";
import { AuthDirective } from "./auth/auth.directive";
import { Log } from "./log";
// import { NgIf } from "@angular/common";


@Component({
    selector:'app-root',
    standalone:true,
    imports:[AuthComponent, LearningResourcesComponent, AuthDirective ,Log],
    templateUrl:'./app.Component.html',
    styleUrl:'./app.Component.css'
})

export class AppComponent{
    private authService=inject(AuthService);
    islogged=true
    // private auth=inject(AuthDirective);

    isAdmin = computed(() => this.authService.activePermission() === 'admin');
}