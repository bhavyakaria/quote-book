import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }
  get(key) {
    if (typeof (Storage) === "undefined") {
      return false;
    }

    try {
      let record = JSON.parse(localStorage.getItem(key));
      if (!record) {
        return null;
      }
      if (new Date().getTime() < record.timestamp && JSON.parse(record.value)) {
        return JSON.parse(record.value);
      }
      else {
        return null;
      }
    }
    catch (e) {
      return null;
    }
  }
  set(key, jsonData, expirationMS?) {
    if (typeof (Storage) === "undefined") {
      return false;
    }
    /*var expirationMS = expirationMin * 60 * 1000;*/
    if (!expirationMS) {
      expirationMS = 24 * 60 * 60 * 1000;
    }
    let record = {
      value: JSON.stringify(jsonData),
      timestamp: new Date().getTime() + expirationMS
    };
    localStorage.setItem(key, JSON.stringify(record));
    return jsonData;
  }
  delete(key) {
    if (typeof (Storage) === "undefined") {
      return false;
    }
    localStorage.removeItem(key);
    return true;
  }
}
