import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  ngOnDestroy(): void {
    
  }
  title = 'dayos app';
  myText="world"
  constructor() {
    // this.changeTitle(this.setTitle);
    // this.onComplete().then(this.setTitle);
    this.title$.subscribe(this.setTitle); 
  }
  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
this.title = `Learning Angular (${timestamp})`;
    }

    title$ = new Observable(observer => {
      setInterval(() => {
      observer.next();
      }, 2000);
      });
    private changeTitle(callback: Function) {
      setTimeout(() => {
      callback();
      }, 2000);
      }

      private onComplete() {
        return new Promise<void>(resolve => {
          setInterval(() => {
            resolve();
            }, 2000);

        });
        }
}
