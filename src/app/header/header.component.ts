import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
[x: string]: any;
        missionName: string = "Angular Program";
        techName: string = "Angular4";

        constructor() { }
        ngOnInit(): void{

        }
}
