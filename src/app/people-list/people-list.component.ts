import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit{
  people: Person[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.people = this.dataService.getPeople();
  }
}
