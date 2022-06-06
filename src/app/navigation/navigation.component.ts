import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public dashboard=true;
  public registration=false;
  public expense=false;
  public table=false;
  public expensedetail = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver,private router:Router ) {}
    public reg(){
    this.registration=true;
    this.dashboard=false;
    this.expense=false;
    this.table=false;
    this.expensedetail = false;
    }
    public dash(){
      this.dashboard=true;
      this.registration=false;
      this.expense=false;
      this.table=false;
      this.expensedetail = false;
    }
    public dis(){
      this.expense=false;
      this.dashboard=false;
      this.registration=false;
      this.table=true;
      this.expensedetail = false;
    }
    public exp() {
      this.expense=false;
      this.dashboard=false;
      this.registration=false;
      this.table=false;
      this.expensedetail = true;
    }
    public ex() {
      this.expense=true;
      this.dashboard=false;
      this.registration=false;
      this.table=false;
      this.expensedetail = false;
    }
    logout(){
      this.router.navigateByUrl('/home',{replaceUrl:true})
    }
}
