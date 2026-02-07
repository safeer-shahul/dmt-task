import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HeaderComponent } from './components/header/header.component';
import { SegmentedControlComponent } from './components/segmented-control/segmented-control.component';


@NgModule({
    declarations: [
        HeaderComponent,
        SegmentedControlComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        LucideAngularModule,
        NzButtonModule,
        NzDropDownModule,
        NzMenuModule,
        NzIconModule
    ],
    exports: [
        HeaderComponent,
        SegmentedControlComponent,
        CommonModule,
        LucideAngularModule,
        NzIconModule,
        NzDropDownModule,
        NzButtonModule,
        NzMenuModule
    ]
})
export class SharedModule { }
