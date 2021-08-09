export class User {
    Username: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    Reviewer: boolean;
    Admin: boolean;
  
    about(): string {
        return "firstName = "+this.FirstName+", lastName="+this.LastName;
    }
  
    constructor(uName: string = '', fName: string = '', lName: string = '', ph: string = '', email: string = "",rev: boolean = false,
      admin: boolean = false) {
      this.Username = uName;
      this.FirstName = fName;
      this.LastName = lName;
      this.Phone = ph;
      this.Email = email;
      this.Reviewer = rev;
      this.Admin = admin;
    }
  }