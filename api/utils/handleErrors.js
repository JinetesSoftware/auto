const handleHttpError = (res, error) => {
    console.log("Error", error);
    res.status(500);
    res.send({ error: "ERROR" });
  };
   
  /**
   * Handle error specify
   * @param {*} res
   * @param {*} message
   * @param {*} code
   */
  const handleErrors = (
    res,
    msg = "an inexperienced error occurred",
    code = 403
  ) => {
    res.status(code);
    res.send({ error: msg });
  };
  
  module.exports = { handleErrors, handleHttpError };