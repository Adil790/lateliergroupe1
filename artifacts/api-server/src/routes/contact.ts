import { Router, type IRouter } from "express";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";
import { db, contactsTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data. Please check all required fields." });
    return;
  }

  try {
    await db.insert(contactsTable).values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      service: parsed.data.service,
      message: parsed.data.message ?? null,
    });

    const response = SubmitContactResponse.parse({
      success: true,
      message: "Merci ! Votre demande a bien été reçue. Nous vous contacterons très prochainement.",
    });

    res.json(response);
  } catch (err) {
    console.error("Failed to save contact submission:", err);
    res.status(500).json({ error: "Une erreur est survenue. Veuillez réessayer." });
  }
});

export default router;
