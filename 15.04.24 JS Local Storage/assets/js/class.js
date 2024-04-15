export class User {
  static id = 1;
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.id = User.id++;
  }
}

