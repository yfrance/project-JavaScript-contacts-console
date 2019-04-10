"use strict";

const myContacts = [
  {
    id: 1,
    name: "Joko Widodo",
    phone: "+62 111 111111",
    email: "joko@widodo.com",
    tags: ["Down to Earth", "Like Metal"]
  },
  {
    id: 2,
    name: "Prabowo Subianto",
    phone: "+62 812 222222",
    email: "prabowo@subianto.com",
    tags: ["Militant", "manful"]
  },
  {
    id: 3,
    name: "Vladimir Putin",
    phone: "+7 112 777777",
    email: "valdimir@putin.ru",
    tags: ["Loyal", "Fought Communism"]
  },
  {
    id: 4,
    name: "Recep Tayyip Erdoğan",
    phone: "+90 310 999999",
    email: "erdogan@turkey.tr",
    tags: ["Forceful", "Charismatic", "Charitable"]
  },
  {
    id: 5,
    name: "Che Guevara",
    phone: "+53 900 900900",
    email: "che@guevara.cu",
    tags: ["Revolutionary", "Famous"]
  }
];
const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`
    );
  }
};
showContacts(myContacts);

// filter

const filterMostTags = contacts => {
  let hasMostTags = {};
  let newFavoriteContact = contacts[0].tags;

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    if (contact.tags.length > newFavoriteContact.length) {
      newFavoriteContact = contact.tags;
      hasMostTags = contact;
    }
  }
  return hasMostTags;
};

console.log(filterMostTags(myContacts));

// add contact

const newContact = e => {
  e.preventDefault();

  const getAddName = document.getElementById("addName").value;
  const getAddPhone = document.getElementById("addPhone").value;
  const getAddEmail = document.getElementById("addEmail").value;
  const addContact = console.log(
    `${getAddName} (${getAddPhone}) <${getAddEmail}>`
  );
};
