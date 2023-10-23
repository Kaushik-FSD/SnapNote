// const Note = require("../models/Notes");
const mongoose = require("mongoose");

exports.dashboard = async (req, res) => {
  const locals = {
    title: "SNAPNOTE - Dashboard",
    description: "SnapNote - Note taking app",
  };
  res.render("dashboard", {
    locals,
    layout: "../views/layouts/dashboard",
  });
};
