class User {

  constructor( userID, name, surname, userName,  password,  contactDetails,  dateOfBirth,  dateCreated,  gender,
                 bio, balance, Profilepic) {

                   this.userID = userID;
                   this.name = name;
                   this.surname = surname;
                   this.userName = userName;
                   this.password = password;
                   this.dateOfBirth = dateOfBirth;
                   this.gender = gender;
                   this.dateCreated = dateCreated;
                   this.bio = bio;
                   this.balance = balance;
                   this.contactDetails = contactDetails;
                   this.proPicURL = Profilepic;
  }

  getUserID = () => userID;
  getName = () => name;
  getSurname = () => surname;
  getUserName = () => userName;
  getPassword = () => password;
  getDateOfBirth = () => dateOfBirth;
  getGender = () => gender;
  getDateCreated = () => dateCreated;
  getBio = () => bio;
  getBalance = () => balance;
  getContactDetails = () => contactDetails;
  getProPicURL = () => proPicURL;

  setUserID = (userID) => {
    this. userID = userID;
  };

  setName = (name) => {
    this.name = name;
  };

  setSurname = (surname) => {
    this.surname = surname;
  };

  setUserName = (userName) => {
    this.userName = userName;
  };

  setPassword = (password) => {
    this.password = password;
  };

  setDateOfBirth = (dateOfBirth) => {
    this.dateOfBirth = dateOfBirth;
  };

  setGender = (gender) => {
    this.gender = gender;
  };

  setDateCreated = (dateCreated) => {
    this.dateCreated = dateCreated;
  };

  setBio = (bio) => {
    this.bio = bio;
  };

  setBalance = (balance) => {
    this.balance = balance;
  };

  setContactDetails = (contactDetails) => {
    this.contactDetails= contactDetails;
  };

  setProPicURL = (proPicURL) => {
    this.proPicURL = proPicURL;
  };
}