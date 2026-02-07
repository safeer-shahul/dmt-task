import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** NG-ZORRO imports **/
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import {
  ClockCircleFill,
  ExclamationCircleFill,
  CheckCircleFill,
  FileTextFill,
  SettingFill,
  FolderFill,
  PieChartFill,
  FileTextOutline,
  LayoutOutline,
  BarChartOutline
} from '@ant-design/icons-angular/icons';


import { SharedModule } from './shared/shared.module';
import { LucideAngularModule, User, Users, Clock, CheckCircle, ChevronDown, Layout, BarChart, FileText, PieChart, Folder, Settings, Menu, Home, Check, ShieldCheck, ShieldAlert, CircleCheckBig, FileChartColumn, LayoutDashboard, ChartBarBig, ChevronRight, ChevronLeft } from 'lucide-angular';



import { TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategy } from './core/services/title-strategy.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    SharedModule,

    LucideAngularModule.pick({
      User, Users, Clock, CheckCircle, ChevronDown, Layout, BarChart, FileText, PieChart, Folder, Settings, Menu, Home, Check, ShieldCheck, ShieldAlert, CircleCheckBig, FileChartColumn, LayoutDashboard, ChartBarBig, ChevronRight, ChevronLeft
    })


  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: NZ_ICONS, useValue: [
        ClockCircleFill,
        ExclamationCircleFill,
        CheckCircleFill,
        FileTextFill,
        SettingFill,
        FolderFill,
        PieChartFill,
        FileTextOutline,
        LayoutOutline,
        BarChartOutline
      ]
    },
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
