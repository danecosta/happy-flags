import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FlagListComponent } from './flag-list/flag-list.component';
import { FlagNewComponent } from './flag-new/flag-new.component';
import { FlagRoutingModule } from './flag.routing.module';

@NgModule({
    declarations: [
        FlagNewComponent,
        FlagListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        FlagRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class FlagModule { }
