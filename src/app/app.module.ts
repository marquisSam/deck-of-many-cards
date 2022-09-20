import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { filterNodeReducer, loreNodeReducer } from './store/loreNode/loreNode.reducer';
import { loreNodeEffect } from './store/loreNode/loreNode.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GlossaryModule } from './modules/glossary/glossary.module';
import { SharedModule } from './core/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({ fullNodeCollection: loreNodeReducer, filteredNodeCollection: filterNodeReducer }),
    EffectsModule.forRoot([loreNodeEffect]),

    GlossaryModule,
    SharedModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
