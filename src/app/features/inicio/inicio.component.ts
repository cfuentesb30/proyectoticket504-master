import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject: Array<object>  = [{
    image: 'https://img.texasmonthly.com/2017/12/20150607Madison_033.jpg?auto=compress&crop=faces&fit=crop&fm=jpg&h=1400&ixlib=php-1.2.1&q=45&w=1400',
    thumbImage: 'https://img.texasmonthly.com/2017/12/20150607Madison_033.jpg?auto=compress&crop=faces&fit=crop&fm=jpg&h=1400&ixlib=php-1.2.1&q=45&w=1400',
    alt: 'Caminatas',
    title: 'Caminatas'
}, {
    image: 'https://i.blogs.es/503a9a/fotografia-concierto/1366_2000.jpg', 
    thumbImage: 'https://i.blogs.es/503a9a/fotografia-concierto/1366_2000.jpg', 
    title: 'Conciertos',
    alt: 'Conciertos'
}, {
  image: 'https://imagenes.elpais.com/resizer/LBdIwGwbP45Xyth_sa2-hrrfxfk=/1500x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZDZUXDNLZJBX5IKEVWNUZFQJZQ.jpg', 
  thumbImage: 'https://imagenes.elpais.com/resizer/LBdIwGwbP45Xyth_sa2-hrrfxfk=/1500x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZDZUXDNLZJBX5IKEVWNUZFQJZQ.jpg', 
  title: 'Partidos de Futbol',
  alt: 'Partidos de Futbol'
}, {
  image: 'https://nbaclothingchile.files.wordpress.com/2011/05/nba.jpg', 
  thumbImage: 'https://nbaclothingchile.files.wordpress.com/2011/05/nba.jpg', 
  title: 'Partidos de Basketbol',
  alt: 'Partidos de Basketbol'
}, {
  image: 'https://unycos.com/blog/wp-content/uploads/2019/03/competencias-mas-importantes-de-natacion.jpg', 
  thumbImage: 'https://unycos.com/blog/wp-content/uploads/2019/03/competencias-mas-importantes-de-natacion.jpg', 
  title: 'Concursos de Natacion',
  alt: 'Concursos de Natacion'
}, {
  image: 'https://izquierdazo.com/wp-content/uploads/2013/10/foremanmoorer83883-758x468.jpg', 
  thumbImage: 'https://izquierdazo.com/wp-content/uploads/2013/10/foremanmoorer83883-758x468.jpg', 
  title: 'Boxeo',
  alt: 'Boxeo'
}, {
  image: 'https://img2.rtve.es/v/5478080/', 
  thumbImage: 'https://img2.rtve.es/v/5478080/', 
  title: 'Partidos de Tennis',
  alt: 'Partidos de Tennis'
}

];

}
