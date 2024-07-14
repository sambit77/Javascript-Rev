let DATA = "website info";

class User{

    constructor(name,email)
    {
        this.name = name;
        this.email = email;
    }

    viewData()
    {
        console.log("Website data is "+DATA);
    }
}

let sambit = new User("sambit","sambitgulu2@gmail.com");
sambit.viewData();

let teacher = new User("shradha","shradha@yahpoo.com");
teacher.viewData();

class Admin extends User {
    constructor(name,email)
    {
        super(name,email);
    }
    ediData()
    {
        DATA = "some new value from admin";
    }
}

let admin = new Admin("rakesh","ra@gmail.com");
admin.ediData();
admin.viewData();