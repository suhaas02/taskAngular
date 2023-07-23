import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/person.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {
  personId: number;
  person: Person | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.personId = Number(params.get('id'));
      this.person = this.dataService.getPersonById(this.personId);
    });
  }

  confirmDelete(): void {
    this.dataService.deletePerson(this.personId);
    this.router.navigate(['/']);
  }
}
