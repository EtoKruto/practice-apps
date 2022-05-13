const { v4: uuidv4 } = require("uuid");

module.exports = (req, res, next) => {
  /**
   *
   * Parse cookies in incoming request:
   *
   */
  //  TODO: By default, every new visitor to the site gets assigned a unique "session_id". This is stored as a cookie in the client's browser and can be read on every request to the server using req.session_id.


  let cookieString = req.get("Cookie") || "";

  parsedCookies = cookieString.split("; ").reduce((cookies, cookie) => {
    if (cookie.length) {
      let index = cookie.indexOf("=");
      let key = cookie.slice(0, index);
      let token = cookie.slice(index + 1);
      cookies[key] = token;
    }
    return cookies;
  }, {});

  if (parsedCookies.s_id) {
    req.session_id = parsedCookies.s_id;
  } else {
    req.session_id = uuidv4();
    res.cookie("s_id", req.session_id);
  }

  next();
};
