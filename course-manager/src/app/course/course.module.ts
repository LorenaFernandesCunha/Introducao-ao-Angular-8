import { StarComponent } from './../star/star.component';
import { ReplacePipe } from './../pipe/replace.pipe';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from '../course-list/course-list.component';
import { CourseInfoComponent } from '../course-info/course-info.component';


@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        ReplacePipe,
        StarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule {

}
