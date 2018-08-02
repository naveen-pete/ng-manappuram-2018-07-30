import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h2>inline template example</h2>
  //   <p>sample for template literal string</p>
  //   <div>third line</div>
  // `,  // inline template using template literal string
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h2 {
  //     color: red;
  //   }

  //   p {
  //     background-color: yellow;
  //   }
  // `]
})
export class AppComponent {
  title = 'app';
}
