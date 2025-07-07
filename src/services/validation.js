
function isValidName(name) {
  return typeof name === 'string' && name.trim().length > 2;
}

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

module.exports = { isValidName, isValidEmail };
