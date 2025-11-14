import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string(),
  pretty_name: z.string(),
  chain_id: z.string().optional(),
  category: z.enum([
    "DeFi",
    "Social",
    "NFT",
    "Gaming",
    "Portfolio",
    "AI",
    "Consumer",
    "Others",
  ]),
  tags: z.array(z.string().max(10)).max(3).optional(),
  description: z
    .string()
    .max(140)
    .describe("A longer description for the landing page"),
  summary: z
    .string()
    .max(50)
    .describe(
      "A short description for the onboarding page (less than or equal to 50 characters)"
    )
    .optional(),
  logo: z.string().regex(new RegExp("^https://.+\\.png$")),
  color: z
    .string()
    .regex(new RegExp("^#([a-fA-F0-9]{6})$"))
    .describe("RGB color")
    .optional(),
  status: z.enum(["live", "upcoming", "hidden"]),
  vip: z
    .object({
      actions: z
        .array(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
          })
        )
        .optional(),
      forum_url: z.string().url().regex(new RegExp("^https://.")).optional(),
    })
    .optional(),
  social: z
    .object({
      website: z.string().url().regex(new RegExp("^https://.")).optional(),
      twitter: z
        .string()
        .url()
        .regex(new RegExp("^https://x.com/."))
        .optional(),
    })
    .optional(),
  l2: z.boolean().optional(),
});
