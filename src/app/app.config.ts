import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { taskReducer } from './store/reducers/task.reducer';
import { TaskEffects } from './store/effects/task.effects';

import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(), // Angular does not enable HTTP default provideHttpClient() registers it in DI system
    provideStore({
      tasks: taskReducer
    }),
    provideEffects([TaskEffects]) 
  ]
};
