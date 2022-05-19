const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const {listContacts} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      console.log(contacts);
      break;

    case 'get':
    // 
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

const arr = hideBin(process.argv);

const {argv} = yargs(arr);

invokeAction(argv);