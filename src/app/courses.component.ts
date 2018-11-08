import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <img [src]="imageUrl" /> 
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        `
        //Attribute binding example <td [attr.colspan]="colSpan"></td>
        /**note DOM element don't have an attribute/property like colspan in HTML thats why we need to tell angular when 
          binding colspan in DOM element that this is an HTML attribute thats why we add "attr.colspan"**/
})
export class CoursesComponent{
   imageUrl = "";
   colSpan = 2;
}