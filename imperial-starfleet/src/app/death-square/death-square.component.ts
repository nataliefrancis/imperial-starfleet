import { Component, OnInit } from '@angular/core';
import { TurretComponent } from '../internal-defenses/turret/turret.component';
import { LaserCannonComponent } from '../internal-defenses/laser-cannon/laser-cannon.component';


@Component({
  selector: 'app-death-square',
  templateUrl: './death-square.component.html',
  styleUrls: ['./death-square.component.css']
})
export class DeathSquareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
