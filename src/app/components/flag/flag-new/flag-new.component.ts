import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flag } from '../models/flag.model';

@Component({
  selector: 'app-flag-new',
  templateUrl: './flag-new.component.html',
  styleUrls: ['./flag-new.component.css']
})
export class FlagNewComponent implements OnInit {

  title = 'New';
  flag = new Flag();
  flagId = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.flagId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.flagId) {
      this.title = "Update";
      this.getFlagById();
    }
  }

  getFlagById(): void {
    let flags: Flag[] = [
      { id: '0bc5deb3-629e-4a6f-a62e-804eab638dd7', name: 'Flag1', app: 'anjo-bolso', environment: 'int' },
      { id: '0bc5deb3-629e-4a6f-a62e-804eab638dd7', name: 'Flag2', app: 'vote-2018', environment: 'prod' }
    ];

    this.flag = flags.filter(x => x.id == this.flagId)[0];
  }

  saveFlag(): void { }


}
