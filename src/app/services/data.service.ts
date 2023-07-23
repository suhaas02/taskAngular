import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private people: Person[] = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    // Add more dummy data as needed
  ];

  getPeople(): Person[] {
    return this.people;
  }

  getPersonById(id: number): Person | undefined {
    return this.people.find(person => person.id === id);
  }

  deletePerson(id: number): void {
    this.people = this.people.filter(person => person.id !== id);
  }
}
