import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CrewComponent } from "./crew/crew.component";
import { TechnologyComponent } from "./technology/technology.component";
import { ExperimentsComponent } from "./experiments/experiments.component";


@Component({
    selector: 'app-root',
    standalone:true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, CrewComponent, TechnologyComponent, ExperimentsComponent]
})
export class AppComponent {
  title = 'Apple Mac';
}
