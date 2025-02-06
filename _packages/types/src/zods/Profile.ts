import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string().optional(),
  pretty_name: z.string().optional(),
  category: z.enum(["DeFi", "NFT", "Gaming", "Manage Portfolio"]).optional(),
  tags: z.array(z.string()).optional(),
  description: z
    .string()
    .describe("A longer description for the landing page")
    .optional(),
  summary: z
    .string()
    .describe(
      "A short description for the onboarding page (less than 50 characters)"
    )
    .optional(),
  color: z
    .string()
    .regex(new RegExp("^#([a-fA-F0-9]{6})$"))
    .describe("RGB color")
    .optional(),
  status: z.enum(["live", "upcoming"]).optional(),
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
