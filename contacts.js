const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

function getContactById(contactId) {
// 
};


function removeContact(contactId) {
  // ...твой код
};

function addContact(name, email, phone) {
  // ...твой код
};

module.exports = {listContacts};