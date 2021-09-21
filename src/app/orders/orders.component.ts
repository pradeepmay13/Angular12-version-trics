import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, Params, Router, RouterEvent, Data } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  account: any = [];
  accounts: any = [];
  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private acctService: AccountService) {
    }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.account = data['account'];
    });
    this.accounts = this.acctService.getAllAccounts();
  }

}
