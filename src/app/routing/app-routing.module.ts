import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from '../components/agenda/agenda.component';
import {MyScheduleComponent} from '../components/my-schedule/my-schedule.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import {MyPassComponent} from '../components/my-pass/my-pass.component';
import { SessionListComponent } from '../components/session-list/session-list.component';
const appRoutes: Routes = [
    {
        path: 'agenda',
        component: AgendaComponent
    },
    {
        path: 'day1',
        component: SessionListComponent
    },
    {
        path: 'day2',
        component: SessionListComponent
    },
    {
        path: 'day3',
        component: SessionListComponent
    },
    {
        path: 'myschedule',
        component: MyScheduleComponent
    },
    {
        path: 'mypass',
        component: MyPassComponent
    },
    // , {
    //     path: '',
    //     redirectTo: '/agenda',
    //     pathMatch: 'full'
    // },
    {
        path: '**',
        component: NotFoundComponent
    }


];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
