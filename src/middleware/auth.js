const jwt = require("jsonwebtoken");
module.exports = function(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ message: "Authentication Failed" });
    try {
      const val = jwt.verify(token, "anystring");
      req.user = val;
      next();
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Token Invalid" });
    }
};

// Hemos creado el auth.js , para crear dentro un protector de la ruta
//y solo el que este logado en usuarios tenga acceso a la misma
// La funcion simplemente recive el auth token del client
//y verifica si es valido