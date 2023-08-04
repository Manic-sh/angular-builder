import { Component, Input } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular'; // <-- import BuilderBlock

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  template: 'Hello: {{name}}!',
  styleUrls: ['./ui-card.component.css']
})
export class UiCardComponent {
  @Input()
  text = ''; // <-- name Angular and Builder inputs the same 
}

BuilderBlock({
  tag: 'app-ui-card', // <-- use the component selector here
  name: 'UI Card',
  inputs: [
    {
      name: 'text', // <-- this name matches the Angular @Input() above
      type: 'string',
    },
  ],
})(UiCardComponent);