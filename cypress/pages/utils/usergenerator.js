const generateRandomString = (myLength) => {
  const chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  const randomArray = Array.from(
    { length: myLength },
    (v, k) => chars[Math.floor(Math.random() * chars.length)]
  );

  const randomString = randomArray.join("");
  return randomString;
};

export const generateUser = (validEmail = true) => {
  const fName = generateRandomString(5);
  const lName = generateRandomString(5);
  const email = validEmail ? `${fName}${lName}@${generateRandomString(5)}.com` : `${fName}${lName}@${generateRandomString(5)}`
  const user = {
    fName: fName,
    lName: lName,
    email: email
  }

  return user;
}