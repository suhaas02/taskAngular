import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/person.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
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

  saveChanges(): void {
    // Save the changes to the person (you can implement this)
    this.router.navigate(['/']);
  }
}
