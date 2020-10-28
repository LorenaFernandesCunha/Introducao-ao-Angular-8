import { CourseService } from './course.service';
import { Course } from './Course';
import { Component, OnInit } from '@angular/core';

@Component({
 // selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

   filteresCourses: Course[] =[];
  _courses: Course[] = [];

  _filterBy: string;

  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
    this.retriveAll();
  }

  retriveAll(): void{
    this.CourseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteresCourses = this._courses;
      },
      error: err => console.log('Error', err)
    });
  }

    deleteById(courseId: number): void {
        this.CourseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with success');
                this.retriveAll();
            },
            error: err => console.log('Error', err)
        })
    }
  set filter(value:string){
    this._filterBy = value;
    this.filteresCourses =  this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
  get filter(){
    return this._filterBy;
  }
}
