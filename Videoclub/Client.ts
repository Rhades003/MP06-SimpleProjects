class Client {
    private name:string;
    private born_date:Date;
    private email:string;
    private pass:string;
    private movie_fav:string;
    private gender:Array<string>;

    constructor(name: string, born_date: Date, email: string, pass: string, movie_fav:string, gender:Array<string>) {
        this.name = name;
        this.born_date = born_date;
        this.email = email;
        this.pass = pass;
        this.movie_fav = movie_fav;
        this.gender = gender;
      }

}
export default Client;