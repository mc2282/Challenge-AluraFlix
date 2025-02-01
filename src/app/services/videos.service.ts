import { Injectable } from '@angular/core';
import { Video } from '../interfaces/video.interface';
import { Category } from '../interfaces/category.inferface';

@Injectable({
  providedIn: 'root'
})

export class VideosService {
  idCounter: number = 10;
  constructor() { }

  listaCategories: Category[] = [
    {
      id: 1,
      tag: "frontend",
      title: "Front end"
    },
    {
      id: 2,
      tag: "backend",
      title: "Back end"
    },
    {
      id: 3,
      tag: "innovacion",
      title: "Innovación y Gestión"
    }
  ]

  listaVideos: Video[] = [
    { title: "Front end", category: "frontend", imageUrl: "assets/images/frontend_1.jpg", videoUrl: "", description: "", id: 1 },
    { title: "Front end", category: "frontend", imageUrl: "assets/images/frontend_2.jpg", videoUrl: "", description: "", id: 2 },
    { title: "Front end", category: "frontend", imageUrl: "assets/images/frontend_3.jpg", videoUrl: "", description: "", id: 3 },
    { title: "Back end", category: "backend", imageUrl: "assets/images/backend_1.jpg", videoUrl: "", description: "", id: 4 },
    { title: "Back end", category: "backend", imageUrl: "assets/images/backend_2.jpg", videoUrl: "", description: "", id: 5 },
    { title: "Back end", category: "backend", imageUrl: "assets/images/backend_3.jpg", videoUrl: "", description: "", id: 6 },
    { title: "Innovación y Gestión", category: "innovacion", imageUrl: "assets/images/innovacion_1.jpg", videoUrl: "", description: "", id: 7 },
    { title: "Innovación y Gestión", category: "innovacion", imageUrl: "assets/images/innovacion_2.jpg", videoUrl: "", description: "", id: 8 },
    { title: "Innovación y Gestión", category: "innovacion", imageUrl: "assets/images/innovacion_3.jpg", videoUrl: "", description: "", id: 9 }
  ];

  getVideos() {
    return this.listaVideos;
  }

  getCategories() {
    return this.listaCategories;
  }

  deleteVideo(video: Video) {
    let index = this.listaVideos.indexOf(video);
    this.listaVideos.splice(index, 1);
  }

  addVideo(newVideo: Video) {
    newVideo.id = this.idCounter;
    this.listaVideos.push(newVideo);
    this.idCounter++;
  }

  editVideo(datosVideo: Video) {
    this.listaVideos.filter((video) => {
      if (video.id === datosVideo.id) {
        video.category = datosVideo.category;
        video.description = datosVideo.description;
        video.imageUrl = datosVideo.imageUrl;
        video.title = datosVideo.title;
        video.videoUrl = datosVideo.videoUrl;
      }
    })
  }

}
