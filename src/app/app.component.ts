import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private updates: SwUpdate, private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.updates.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        switchMap(() =>
          this.snackBar
            .open('A new version is available!', 'Update now')
            .afterDismissed()
        ),
        filter((result) => result.dismissedByAction),
        map(() => this.updates.activateUpdate().then(() => location.reload()))
      )
      .subscribe();
  }
}
