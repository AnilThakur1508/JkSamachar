import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts = [
    {
      imageUrl: 'assets/certificatecategory.jpeg',
      title: 'Kashmir Tourism Flourishes',
      time: '2023-10-01 10:00 AM',
      description:
        'Kashmir, often referred to as the paradise on earth, is experiencing a tourism boom this year. With increased connectivity and better infrastructure, more visitors are exploring the valleys, lakes, and cultural heritage of the region. Local businesses are thriving, and the government is introducing new policies to sustain growth while protecting the environment.'
    },
    {
      imageUrl: 'assets/certificatecategory.jpeg',
      title: 'Kashmir dlclvn Flourishes',
      time: '2023-10-01 10:00 AM',
      description:
        'Kashmir, often referred to as the paradise on earth, is experiencing a tourism boom this year. With increased connectivity and better infrastructure, more visitors are exploring the valleys, lakes, and cultural heritage of the region. Local businesses are thriving, and the government is introducing new policies to sustain growth while protecting the environment.'
    }
  ];

}
