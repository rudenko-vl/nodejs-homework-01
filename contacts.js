const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");
const { v4: uuidv4 } = require("uuid");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find(({ id }) => id == contactId);
    if(!result){
        return null;
    }
    return result;
};


async function removeContact(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === `${contactId}`);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((_, index) => index !== idx);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return contacts[idx];
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: uuidv4(), name: name, email: email, phone: phone };

  const newContacts = [...contacts, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return newContact;
}

module.exports = {listContacts, getContactById, addContact, removeContact};