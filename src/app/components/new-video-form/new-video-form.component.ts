import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../../interfaces/video.interface';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../interfaces/category.inferface';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-new-video-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-video-form.component.html',
  styleUrl: './new-video-form.component.css'
})
export class NewVideoFormComponent implements OnInit {
  listaCategorias: Category[] = [];

  @Output() close = new EventEmitter<void>();

  @Output() formData = new EventEmitter<Video>();

  newVideoForm: FormGroup;

  constructor(private fb: FormBuilder, private serviceVideos: VideosService) { }

  ngOnInit() {
    this.listaCategorias = this.serviceVideos.getCategories();

    this.newVideoForm = this.fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      videoUrl: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmit() {
    //console.log(this.newVideoForm.value)

    if (this.newVideoForm.valid) {
      const newVideo: Video = this.newVideoForm.value;
      this.serviceVideos.addVideo(newVideo);
      alert('Video creado.')
      this.closeNewVideoForm();
    } else {
      console.error('Form is invalid');
    }

  }

  closeNewVideoForm() {
    this.close.emit();
  }

  limpiarDatos() {
    this.newVideoForm.reset();
  }
}
