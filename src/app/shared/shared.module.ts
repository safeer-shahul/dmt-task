import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        LucideAngularModule,
        NzButtonModule,
        NzDropDownModule,
        NzIconModule
    ],
    exports: [
        HeaderComponent,
        CommonModule,
        LucideAngularModule,
        NzIconModule
    ]
})
export class SharedModule { }
