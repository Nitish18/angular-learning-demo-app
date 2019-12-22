import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/app.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EntriesComponent],
    bootstrap: [AppComponent, EntriesComponent]
})
export class AppModule {

}