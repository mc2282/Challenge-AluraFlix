import { Component, Input, OnInit, Output } from '@angular/core';
import { Video } from '../../interfaces/video.interface';
import { CommonModule } from '@angular/common';
import { Category } from '../../interfaces/category.inferface';
import { EditVideoFormComponent } from "../edit-video-form/edit-video-form.component";
import { VideosService } from '../../services/videos.service';
import { CardInfoComponent } from "../card-info/card-info.component";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, EditVideoFormComponent, CardInfoComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})

export class CardsComponent implements OnInit {

  editFormState = false;
  cardInfoState = false;

  listaVideos: Video[] = [];
  listaCategories: Category[] = [];

  videoAEditar: Video;
  videoInfo: Video;

  constructor(private videosService: VideosService) { };

  ngOnInit(): void {
    this.listaCategories = this.videosService.getCategories();
    this.listaVideos = this.videosService.getVideos();
  }

  //edit video
  mostrarEditVideoForm(video: Video) {
    this.editFormState = !this.editFormState;
    this.videoAEditar = video;
  }
  closeEditVideoForm() {
    this.editFormState = !this.editFormState;
  }

  //card info
  mostrarCardInfo(video: Video) {
    this.cardInfoState = !this.cardInfoState;
    this.videoInfo = video;
  }
  closeCardInfo() {
    this.cardInfoState = !this.cardInfoState;
  }

  //delete video
  eliminarVideo(video: Video) {
    this.videosService.deleteVideo(video);
  }

}
