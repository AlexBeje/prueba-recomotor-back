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
      test
      <h1>Available endpoints:</h1>
      <ul>
        <li><strong>/cars</strong> - Get all cars from the database <strong>[GET]</strong></li>
        <li><strong>/users</strong> - Get all the users from the database <strong>[GET]</strong></li>
        <li><strong>/users/:id</strong> - Get user by id from the database <strong>[GET]</strong></li>
        <li><strong>/users/:id</strong> - Update user data (favorites list) of the user <strong>[PATCH]</strong></li>
      </ul>
    `;
  }
}
