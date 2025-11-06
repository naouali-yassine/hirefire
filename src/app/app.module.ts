import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
    selector: 'app-root',
    template: `<h1>App</h1>`
})
export class AppComponent {}

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes)]
})
export class AppModule {}
