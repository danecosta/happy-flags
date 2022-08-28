import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flag } from '../models/flag.model';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.css']
})
export class FlagListComponent implements OnInit {

  filter: string;
  flags: Flag[] = [
    { id: '0bc5deb3-629e-4a6f-a62e-804eab638dd7', name: 'Flag1', app: 'anjo-bolso', environment: 'int' },
    { id: '0bc5deb3-629e-4a6f-a62e-804eab638dd7', name: 'Flag2', app: 'vote-2018', environment: 'prod' }
  ];
  flagBkp = Object.assign(this.flags);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  filterFlags(): void {
    this.flags = this.flagBkp;
    if (this.filter)
      this.flags = this.flagBkp.filter(x => x.name === this.filter);
  }

  edit(id: string): void {
    this.router.navigate(['/flag/update', id]);
  }

}
