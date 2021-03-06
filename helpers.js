const generateRandomString = function(database) {
  const randomString = new Array(6).fill(0);

  const possibleCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  do {
    randomString.forEach((current, i) => {
      randomString[i] = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    });
  } while (database[randomString.join] !== undefined);

  return randomString.join('');
};

// Adds http to the URL if it's not present to avoid
// internal redirections.
const cleanURL = function(URL) {
  let cleaned = String(URL).toLowerCase();
  if (!cleaned.match(/^https*:\/\//)) {
    cleaned = 'http://' + cleaned;
  }
  return cleaned;
};

const userIDExists = function(userCookie, database) {
  
  if (userCookie && userCookie.user_id) {
    for (const user in database) {
      if (user === userCookie.user_id) return true;
    }
    return false;
  }
};

const getUserID = function(email, database) {
  for (const user in database) {
    if (database[user].email === email) {
      return user;
    }
  }
  return false;
};

const emailAlreadyExists = function(email, database) {
  for (const user in database) {
    if (database[user].email === email) {
      return true;
    }
  }
  return false;
};

const getUserByEmail = function(email, database) {
  for (const user in database) {
    if (database[user].email === email) {
      return user;
    }
  }
};
// Returns all mini URLs a user owns.
const urlsForUsers = function(userID, database) {
  const userURLs = {};

  for (const url in database) {
    if (database[url].userID === userID) {
      userURLs[url] = database[url];
    }
  }
  return userURLs;
};

module.exports = {
  cleanURL,
  generateRandomString,
  emailAlreadyExists,
  getUserByEmail,
  userIDExists,
  getUserID,
  urlsForUsers,
};