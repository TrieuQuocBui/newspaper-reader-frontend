import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { HotNewsComponent } from './hot-news/hot-news.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { TopicSetComponent } from './topic-set/topic-set.component';
import { NewsComponent } from './news/news.component';
import { SliderDirective } from 'src/app/directives/SliderDirective.directive';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    
  ],
  declarations: [
    UserComponent,
    HeaderComponent,
    HomeComponent,
    ToolBarComponent,
    NewsComponent,
    TopicSetComponent,
    HotNewsComponent,
    SliderComponent,
    FooterComponent,
    SliderDirective
  ]
})
export class UserModule {}
