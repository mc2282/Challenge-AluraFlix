import { Component, OnInit, Input } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { Category } from '../../interfaces/category.inferface';
import { Video } from '../../interfaces/video.interface';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css'
})
export class CardInfoComponent implements OnInit {
  listaVideos: Video[] = [];

  @Input() videoInfo: Video;
  @Output() close = new EventEmitter<void>();

  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.listaVideos = this.videosService.getVideos();
  }

  closeCardInfo() {
    this.close.emit();
  }

}
