import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from "./pages/video/video.component";
import {HomeComponent} from "./pages/home/home.component";
import {CanaisComponent} from "./pages/canais/canais.component";
import {TematicasComponent} from "./pages/tematicas/tematicas.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";

const routes: Routes = [
  {path: 'video/:id', component: VideoComponent},
  // {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'canais', component: CanaisComponent},
  {path: 'tematicas', component: TematicasComponent},
  {path: 'playlists', component: PlaylistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
