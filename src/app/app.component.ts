import { Component } from '@angular/core';

import { BuiltInTransformsComponent } from './built-in-transforms.component';
import { CustomTransformsComponent } from './custom-transforms.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [BuiltInTransformsComponent, CustomTransformsComponent],
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent {}
