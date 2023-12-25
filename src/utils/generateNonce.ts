export const generateNonce = () => {
  // Define the length of the nonce
  const nonceLength = 7;

  // Generate random alphanumeric characters for the nonce
  const nonceCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  // Use Array.from and a lambda function to generate a nonce of the specified length
  const nonceArray = Array.from(
    { length: nonceLength },
    () => nonceCharacters[Math.floor(Math.random() * nonceCharacters.length)]
  );

  // Join the array into a string
  const nonce = nonceArray.join("");
  return nonce;
};
