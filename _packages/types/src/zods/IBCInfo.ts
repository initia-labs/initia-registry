import { z } from "zod";

export const IBCInfoSchema = z
  .object({
    $schema: z
      .string()
      .regex(new RegExp("^(\\.\\./)+ibc_data\\.schema\\.json$"))
      .optional(),
    chain_1: z
      .object({
        chain_name: z.string(),
        client_id: z
          .string()
          .describe(
            "The client ID on the corresponding chain representing the other chain's light client."
          ),
        connection_id: z
          .string()
          .describe(
            "The connection ID on the corresponding chain representing a connection to the other chain."
          ),
      })
      .strict()
      .describe(
        "Top level IBC data pertaining to the chain. `chain_1` and `chain_2` should be in alphabetical order."
      ),
    chain_2: z
      .object({
        chain_name: z.string(),
        client_id: z
          .string()
          .describe(
            "The client ID on the corresponding chain representing the other chain's light client."
          ),
        connection_id: z
          .string()
          .describe(
            "The connection ID on the corresponding chain representing a connection to the other chain."
          ),
      })
      .strict()
      .describe(
        "Top level IBC data pertaining to the chain. `chain_1` and `chain_2` should be in alphabetical order."
      ),
    channels: z.array(
      z
        .object({
          chain_1: z
            .object({
              channel_id: z
                .string()
                .describe(
                  "The channel ID on the corresponding chain's connection representing a channel on the other chain."
                ),
              port_id: z
                .string()
                .describe(
                  "The IBC port ID which a relevant module binds to on the corresponding chain."
                ),
              client_id: z
                .string()
                .describe(
                  "Optional. The client ID on the corresponding chain representing the other chain's light client."
                )
                .optional(),
              connection_id: z
                .string()
                .describe(
                  "Optional. The connection ID on the corresponding chain representing a connection to the other chain."
                )
                .optional(),
            })
            .strict(),
          chain_2: z
            .object({
              channel_id: z
                .string()
                .describe(
                  "The channel ID on the corresponding chain's connection representing a channel on the other chain."
                ),
              port_id: z
                .string()
                .describe(
                  "The IBC port ID which a relevant module binds to on the corresponding chain."
                ),
              client_id: z
                .string()
                .describe(
                  "Optional. The client ID on the corresponding chain representing the other chain's light client."
                )
                .optional(),
              connection_id: z
                .string()
                .describe(
                  "Optional. The connection ID on the corresponding chain representing a connection to the other chain."
                )
                .optional(),
            })
            .strict(),
          ordering: z
            .enum(["ordered", "unordered"])
            .describe(
              "Determines if packets from a sending module must be 'ordered' or 'unordered'."
            ),
          version: z.string().describe("IBC Version"),
          description: z
            .string()
            .describe("Human readable description of the channel.")
            .optional(),
          tags: z
            .object({
              status: z.enum(["live", "upcoming", "killed"]).optional(),
              preferred: z.boolean().optional(),
              dex: z.string().optional(),
              properties: z
                .string()
                .describe(
                  "String that helps describe non-dex use cases ex: interchain accounts(ICA)."
                )
                .optional(),
            })
            .catchall(z.any())
            .describe(
              "Human readable key:value pairs that help describe and distinguish channels."
            )
            .optional(),
        })
        .strict()
    ),
  })
  .strict();
