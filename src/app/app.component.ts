import { Component } from '@angular/core';
import { Publicacion } from './models/Publicacion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local';
  BlogArray: Publicacion[]= [
    {id:1,titulo:"Publicacion primera",descripcion:"Esta es la descripcion de la publicacion primera"},
    {id:2,titulo:"Publicacion segunda",descripcion:"Esta es la descripcion de la publicacion segunda"}

  ];
  selectBlog: Publicacion=new Publicacion;

  Add_Update()
  {
    if(this.selectBlog.id===0)
    {
      this.selectBlog.id=this.BlogArray.length+1;
      this.BlogArray.push(this.selectBlog);
    }
      this.selectBlog = new Publicacion();
  }
  
  Editar(blog: Publicacion)
  {
    this.selectBlog=blog;
  }

  Eliminar()
  {
    this.BlogArray = this.BlogArray.filter(a=> a!= this.selectBlog);
    this.selectBlog = new Publicacion();
  }
}
