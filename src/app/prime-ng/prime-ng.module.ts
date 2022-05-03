import { NgModule } from '@angular/core';

// primeNg
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { AccordionModule } from 'primeng/accordion';





@NgModule({
  exports:[
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    CardModule,
    ChipModule,
    FieldsetModule,
    DialogModule,
    SidebarModule,
    MenubarModule,
    TabMenuModule,
    InputTextModule,
    PanelModule,
    AccordionModule
  ]
})
export class PrimeNgModule { }
