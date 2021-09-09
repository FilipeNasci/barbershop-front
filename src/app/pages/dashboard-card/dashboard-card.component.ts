import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  @Input() image: string = ''
  @Input() text: string = ''
  @Input() target: string = ''
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect() {
    this.router.navigate([`/${this.target}`])
  }

}
