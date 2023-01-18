
const createResponse = (data, message = null, error = false, token = null) => {
  return {
    data,
    message,
    error,
    token
  }
};

module.exports = createResponse;