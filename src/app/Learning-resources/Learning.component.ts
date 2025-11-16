import { Component} from "@angular/core";
import { SafeLinkDirectives } from "../safe-link.directives";
import { Log } from "../log";



@Component({
    selector:'app-learning-resources',
    standalone:true,
    imports:[SafeLinkDirectives, Log],
    templateUrl:'./learning.Component.html',
    styleUrl:'./learning.Component.css'
})

export class LearningResourcesComponent{
   
}