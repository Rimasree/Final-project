export class User {
   
    first_name !: string;
    last_name ! : string;
    email! : string;
    password ! : string;
    // cpassword!:string;
    profile_pic ! : File;
}

export class login{
    email!: string;
    password ! : string;
}
