import { Injectable } from '@angular/core';
import { Account } from '../models/account.models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private readonly http: FeatureHttpClient ) {}

  accountDetails = [
    new Account('A1001','Saving', 22000),
    new Account('A1002','Checking', 1000)
  ];
   // get the Accounts list
  getAllAccounts(){
    return this.accountDetails;
  }
  // Account by number
  getAccountById(acctNo?: string){
    return this.accountDetails.find(account => account.accountNumber === acctNo)
  }
}