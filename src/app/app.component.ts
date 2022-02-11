import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyModalComponent } from 'src/app/my-component/my-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-angular-material';
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '6000px',
      height: '480px',
      data: {  }
    });

}}