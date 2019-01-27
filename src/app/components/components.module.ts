import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaperComponent } from './paper/paper.component';
import { RockComponent } from './rock/rock.component';
import { ScissorsComponent } from './scissors/scissors.component';

@NgModule({
  declarations: [PaperComponent, RockComponent, ScissorsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports:[PaperComponent,RockComponent,ScissorsComponent]
})
export class ComponentsModule { }
