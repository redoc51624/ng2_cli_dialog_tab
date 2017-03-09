# PreventDefault

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.0.

## Running this project on local system
Clone the Repository and run:
```bash
$ npm i
```
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How to create new component inside this app
To create new component run `ng g c components/component-name/component-name` this will create component folder inside
components and will update necessary declarations in component.module.ts.


## How to create new directives inside this app
To create new directive run `ng g d directives/directive-name/directive-name` this will create directive folder inside
 directives and will update  necessary declarations in directive.module.ts.

## How to create new services inside this app
To create new services run `ng g s services/service-name/service-name` this will create service folder inside
services and will update  necessary declarations in services.module.ts.

## Component module will look like this...
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterComponent],
  exports: [FilterComponent]
})
export class ComponentsModule { }
```
The component,directive,pipes,services module should be imported inside app.module.ts like this
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ComponentsModule} from './components/components.module';
import {DirectivesModule} from './directives/directives.module';
import {PipesModule} from './pipes/pipes.module';
import {ServicesModule} from './services/services.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    ServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## License

© [SAPIENT](mailto:)
