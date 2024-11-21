
// export const isAdmin = (req, res, next) => {
//     if (req.user && req.user.role === "Admin") {
//       return next();
//     }
//     return res.status(403).json({ message: "Access denied. Admins only." });
//   };
  
//   export const isTeacher = (req, res, next) => {
//     if (req.user && req.user.role === "Teacher") {
//       return next();
//     }
//     return res.status(403).json({ message: "Access denied. Teachers only." });
//   };
  
//   export const isStudent = (req, res, next) => {
//     if (req.user && req.user.role === "Student") {
//       return next();
//     }
//     return res.status(403).json({ message: "Access denied. Students only." });
//   };
  