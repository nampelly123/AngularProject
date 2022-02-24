import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Error Occured. Contact support at 123-12345'

  constructor() { }

  ngOnInit(): void {
  }

}
