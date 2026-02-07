import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LucideAngularModule } from 'lucide-angular';
import { SharedModule } from '../shared/shared.module';
import { PlanningTasksRoutingModule } from './planning-tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskStatsComponent } from './task-stats/task-stats.component';

@NgModule({
    declarations: [
        TaskListComponent,
        TaskDetailsComponent,
        TaskStatsComponent
    ],
    imports: [
        CommonModule,
        PlanningTasksRoutingModule,
        LucideAngularModule,
        SharedModule
    ]
})
export class PlanningTasksModule { }

