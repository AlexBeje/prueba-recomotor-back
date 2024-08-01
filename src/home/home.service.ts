import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  getHello(): string {
    return `
      <style>
        body {
          font-family: Roboto, sans-serif;
        }
      </style>
      <h1>Available endpoints:</h1>
      <ul>
        <li><strong>/cars</strong> - Get all cars from the database <strong>[GET]</strong></li>
      </ul>
    `;
  }
}
