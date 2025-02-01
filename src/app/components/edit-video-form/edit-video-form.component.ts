import { Component, OnInit } from '@angular/core';
import { Video } from '../../interfaces/video.interface';
import { Input, Output, EventEmitter } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../interfaces/category.inferface';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-edit-video-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-video-form.component.html',
  styleUrl: './edit-video-form.component.css'
})
export class EditVideoFormComponent implements OnInit {

  listaVideos: Video[] = []
  listaCategorias: Category[] = []

  editVideoForm: FormGroup;

  @Input() videoAEditar: Video;

  constructor(private videoService: VideosService, private fb: FormBuilder) { }

  ngOnInit() {
    this.listaVideos = this.videoService.getVideos();
    this.listaCategorias = this.videoService.getCategories();

    this.editVideoForm = this.fb.group({
      category: [''],
      title: [''],
      imageUrl: [''],
      videoUrl: [''],
      description: ['']
    })
  }

  @Output() close = new EventEmitter<void>();

  closeEditVideoForm() {
    this.close.emit();
  }

  limpiarDatos() {
    this.editVideoForm.reset();
  }

  onSubmit() {
    if (this.editVideoForm.valid) {
      this.edicionVideo();
      alert('Video editado.')
      this.closeEditVideoForm();
    } else {
      alert('Datos invalidos.')
    }
  }

  edicionVideo() {
    let formData = this.editVideoForm.value;

    this.videoAEditar.category = formData.category;
    this.videoAEditar.description = formData.description;
    this.videoAEditar.imageUrl = formData.imageUrl;
    this.videoAEditar.title = formData.title;
    this.videoAEditar.videoUrl = formData.videoUrl;

    this.videoService.editVideo(this.videoAEditar);
  }
}
