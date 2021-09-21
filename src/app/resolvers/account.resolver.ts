import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account.models';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AccountResolver implements Resolve<Account> {
  constructor(private acctService: AccountService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any  {
    console.log(route.params['acctno']);
    return this.acctService.getAccountById(route.params['acctno']);
  }
}
