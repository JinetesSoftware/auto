const customHeader = (req, res, next) => {
    try {
      if (req.headers.api_key) {
        console.log(req.headers.api_key);
        next();
      } else {
        res.send({ msg: "NO EXISTE API KEY" });
      }
    } catch (error) {
      res.send({ error });
    }
  };
  
  module.exports = customHeader;