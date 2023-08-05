import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  constructor() { }

  setData(fname: string, lname: string, mail: string, token: string,img:string) {
    window.localStorage.setItem('f_name', fname);
    window.localStorage.setItem('l_name', lname);
    window.localStorage.setItem('email', mail);
    window.localStorage.setItem('p_image', img);
    window.sessionStorage.setItem('token', token);
  }
  //fetch from local storage
  getData()
  {
    const savedData=[];
    let data={
      first_name:window.localStorage.getItem('f_name'),
      last_name:window.localStorage.getItem('l_name'),
      email:window.localStorage.getItem('email'),
      profile_pic :window.localStorage.getItem('p_image'),
     

    }
    savedData.push(data);
    return savedData;
  }
  //fetch token from storage
  getToken()
  {
    return window.sessionStorage.getItem('token');
  }
  //delete data from storage
  getDestroy()
  {
    return window.sessionStorage.clear();
  }
}
