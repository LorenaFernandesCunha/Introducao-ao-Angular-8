import { CourseService } from './course.service';
import { Course } from './Course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

   filteresCourses: Course[] =[];
  _courses: Course[] = [];

  _filterBy: string;

  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this.CourseService.retrieveAll();
    this.filteresCourses = this._courses;


  }

  set filter(value:string){
    this._filterBy = value;
    this.filteresCourses =  this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
  get filter(){
    return this._filterBy;
  }
}
