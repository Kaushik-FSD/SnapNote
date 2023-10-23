/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {
  const locals = {
    title: "SNAPNOTE",
    description: "SnapNote - Note taking app",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

exports.about = async (req, res) => {
  const locals = {
    title: "About - SNAPNOTE",
    description: "SnapNote - Note taking app",
  };
  res.render("about", locals);
};

/**
 * GET /
 * About
 */
// exports.about = async (req, res) => {
//   const locals = {
//     title: "About - NodeJs Notes",
//     description: "Free NodeJS Notes App.",
//   };
//   res.render("about", locals);
// };
