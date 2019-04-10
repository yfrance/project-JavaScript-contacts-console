// Show name
const myContact = [
  {
    id: 001,
    name: "Captain America",
    phone: "+1 123456789",
    email: "captain@america.com",
    hobby: "bug hunter"
  },
  {
    id: 002,
    name: "Spiderman",
    phone: "+1 234567891",
    email: "spiderman@america.com",
    hobby: "Hangging"
  },
  {
    id: 003,
    name: "Thor",
    phone: "+1 3456789012",
    email: "thor@america.com",
    hobby: "throw lightning"
  },
  {
    id: 004,
    name: "Hulk",
    phone: "+1 456789123",
    email: "hulk@america.com",
    hobby: "eat parkia speciosa"
  }
];

// ------------------------------------------------------------
console.log();
//Show Contact
const showContact = contact => {
  for (let index = 0; index < contact.length; index++) {
    const contact = myContact[index];

    console.log(
      `[${contact.id}] ${contact.name} <${contact.phone}> ${contact.email} (${
        contact.hobby
      })`
    );
  }
};

// --------------------------------------------------------------
console.log();
// Filter Contact
const filterContacts = (contact, minimumNameLength) => {
  let newContact = [];

  for (let index = 0; index < contact.length; index++) {
    const contact = myContact[index];

    if (contact.name.length >= minimumNameLength) {
      newContact.push(contact);
    }
  }
  return newContact;
};

const filteredContact = filterContacts(myContact, 4);

// --------------------------------------------------------------------------------------
console.log();
// Add New Contact
const addContact = {
  id: 005,
  name: "Supermie",
  phone: "+1 567891234",
  email: "supermie@america.com",
  hobby: "micin"
};

// myContact.push(addContact);

console.log();
// Remove Contact
const removeContact = () => {
  myContact.pop(); // myContact.splice(myContact.length-1,1)
  showContact(myContact);
  console.log("delete successful");
};

showContact(myContact);
// showContact(filteredContact);
// showContact(myContact);
// removeContact();
