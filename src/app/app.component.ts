import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {StudentService} from './service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'student';

  constructor( private router: Router,) { }


}
