import { z } from "zod";

export const ErrorSchema = z.object({
  $schema: z
    .string()
    .regex(new RegExp("^(\\.\\./)+error\\.schema\\.json$"))
    .optional(),
  chain_name: z.string().optional(),
  module_address: z.string().regex(new RegExp("^0x[0-9a-f]+$")),
  errors: z.any(),
});
