import { Component } from '@angular/core';
import { NewVideoFormComponent } from "../../components/new-video-form/new-video-form.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NewVideoFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  newVideoFormState = false;

  mostrarNewVideoForm() {
    this.newVideoFormState = !this.newVideoFormState;
  }
}
