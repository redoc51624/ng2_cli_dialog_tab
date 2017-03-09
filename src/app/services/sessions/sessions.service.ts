import { Injectable } from '@angular/core';

@Injectable()
export class SessionsService {

  constructor() { }

  public listenToService(): void {
    console.log("Listening to SessionsService");
  }

}
