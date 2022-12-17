import { Router } from "express";
// Router es un module express para separar
// app en varios archivos

// Se puede pasar cualquier tipo de dato en el obj

const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "First Web Project" })
);

router.get("/about", (req, res) => res.render("about", { title: "About Me" }));

router.get("/contact", (req, res) => res.render("contact", { title: "Contact Me" }));

export default router;
