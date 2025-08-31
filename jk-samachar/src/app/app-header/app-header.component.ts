import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-header',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent implements OnInit {
  IsAdminLogined:boolean=true;
  ngOnInit() {
  }
}
