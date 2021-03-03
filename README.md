# Hi there!

This is my implementation of test assignment.
It is done with usage of following technologies:

- Angular 11
- 'ngx-emoji-mart' for emoji picker
- NgRx &darr;

NgRx is used for following cases:
- Store - for state management
- ReactiveComponent - for getting data from rxjs observables via 'ngrxPush' pipe (like 'async' pipe, but with more coverage)

## Architectural decisions
I created two pure component:
- Diary component - for creating note
- Note component - for note presentation

Container component manages data with NgRx store 

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
