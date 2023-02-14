import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  ngOnInit(): void {}
  course = [
    {
      id: 1,
      name: 'Learn Angular',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: '../../assets/angular.jpg',
    },
    {
      id: 2,
      name: 'Learn Typescript',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: '../../assets/typescript.jpg',
    },
    {
      id: 3,
      name: 'Learn NodeJs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: '../../assets/nodejs.jpg',
    },
    {
      id: 1,
      name: 'Learn ReactJs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: '../../assets/reactjs.jpg',
    },
  ];
}
