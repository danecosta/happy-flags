import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlagListComponent } from './flag-list/flag-list.component';
import { FlagNewComponent } from './flag-new/flag-new.component';

const flagRoutes: Routes = [
    { path: 'flag/all', component: FlagListComponent },
    { path: 'flag/new', component: FlagNewComponent },
    { path: 'flag/update/:id', component: FlagNewComponent },
    { path: '', redirectTo: '/flag/all', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forChild(flagRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FlagRoutingModule { }
