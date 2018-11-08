import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent]="title"></h2>

        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" /> 
        `// Property binding example <img [src]="imageUrl"/> && <h2 [textContent]="title"></h2>
})
export class CoursesComponent{
   title = "List of courses";
   imageUrl = "http://lorempixel.com/400/200";
}