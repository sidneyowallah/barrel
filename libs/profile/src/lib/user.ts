export class User {
  constructor(
    public id: string,
    public username: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public dob: string,
    public address: string,
    public state: string,
    public profileImg: string,
    public favorites: string[],
    public role: string
  ) {}
}
