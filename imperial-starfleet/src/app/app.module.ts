import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './internal-defenses/turret/turret.component';
import { LaserCannonComponent } from './internal-defenses/laser-cannon/laser-cannon.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';


@NgModule({
  declarations: [
    AppComponent,
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent,
    TieFighterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
