import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';

//NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { todoReducer } from './todos/todo.reducer';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      //logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
