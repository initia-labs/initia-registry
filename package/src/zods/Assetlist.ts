import { z } from "zod";

export const AssetlistSchema = z
  .object({
    $schema: z
      .string()
      .regex(new RegExp("^(\\.\\./)+assetlist\\.schema\\.json$"))
      .optional(),
    chain_name: z.string(),
    assets: z.array(
      z
        .object({
          description: z
            .string()
            .describe("[OPTIONAL] A short description of the asset")
            .optional(),
          denom_units: z.array(
            z
              .object({
                denom: z.string(),
                exponent: z.number().int(),
                aliases: z.array(z.string()).optional(),
              })
              .strict()
          ),
          type_asset: z
            .enum(["sdk.coin", "cw20", "erc20", "ics20", "snip20", "snip25"])
            .describe(
              "[OPTIONAL] The potential options for type of asset. By default, assumes sdk.coin"
            )
            .default("sdk.coin"),
          address: z
            .string()
            .describe(
              "[OPTIONAL] The address of the asset. Only required for type_asset : cw20, snip20"
            )
            .optional(),
          base: z
            .string()
            .describe("The base unit of the asset. Must be in denom_units."),
          name: z
            .string()
            .max(42)
            .describe("The project name of the asset. For example Bitcoin."),
          display: z
            .string()
            .describe(
              "The human friendly unit of the asset. Must be in denom_units."
            ),
          symbol: z
            .string()
            .describe("The symbol of an asset. For example BTC."),
          traces: z
            .array(
              z.union([
                z
                  .object({
                    type: z.literal("ibc"),
                    counterparty: z
                      .object({
                        chain_name: z
                          .string()
                          .describe(
                            "The name of the counterparty chain. (must match exactly the chain name used in the Chain Registry)"
                          ),
                        base_denom: z
                          .string()
                          .describe(
                            "The base unit of the asset on its source platform. E.g., when describing ATOM from Cosmos Hub, specify 'uatom', NOT 'atom' nor 'ATOM'; base units are unique per platform."
                          ),
                        channel_id: z
                          .string()
                          .regex(new RegExp("^channel-\\d+$"))
                          .describe(
                            "The counterparty IBC transfer channel(, e.g., 'channel-1')."
                          ),
                      })
                      .strict(),
                    chain: z
                      .object({
                        channel_id: z
                          .string()
                          .regex(new RegExp("^channel-\\d+$"))
                          .describe(
                            "The chain's IBC transfer channel(, e.g., 'channel-1')."
                          ),
                        path: z
                          .string()
                          .describe(
                            "The port/channel/denom input string that generates the 'ibc/...' denom."
                          ),
                      })
                      .strict(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("ibc-cw20"),
                    counterparty: z
                      .object({
                        chain_name: z
                          .string()
                          .describe(
                            "The name of the counterparty chain. (must match exactly the chain name used in the Chain Registry)"
                          ),
                        base_denom: z
                          .string()
                          .describe(
                            "The base unit of the asset on its source platform. E.g., when describing ATOM from Cosmos Hub, specify 'uatom', NOT 'atom' nor 'ATOM'; base units are unique per platform."
                          ),
                        port: z
                          .string()
                          .describe(
                            "The port used to transfer IBC assets; often 'transfer', but sometimes varies, e.g., for outgoing cw20 transfers."
                          ),
                        channel_id: z
                          .string()
                          .regex(new RegExp("^channel-\\d+$"))
                          .describe(
                            "The counterparty IBC transfer channel(, e.g., 'channel-1')."
                          ),
                      })
                      .strict(),
                    chain: z
                      .object({
                        port: z
                          .string()
                          .describe(
                            "The port used to transfer IBC assets; often 'transfer', but sometimes varies, e.g., for outgoing cw20 transfers."
                          ),
                        channel_id: z
                          .string()
                          .regex(new RegExp("^channel-\\d+$"))
                          .describe(
                            "The chain's IBC transfer channel(, e.g., 'channel-1')."
                          ),
                        path: z
                          .string()
                          .describe(
                            "The port/channel/denom input string that generates the 'ibc/...' denom."
                          ),
                      })
                      .strict(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.enum([
                      "bridge",
                      "liquid-stake",
                      "synthetic",
                      "wrapped",
                      "additional-mintage",
                      "test-mintage",
                    ]),
                    counterparty: z
                      .object({
                        chain_name: z
                          .string()
                          .describe(
                            "The chain or platform from which the asset originates. E.g., 'cosmoshub', 'ethereum', 'forex', or 'nasdaq'"
                          ),
                        base_denom: z.string(),
                        contract: z
                          .string()
                          .describe(
                            "The contract address where the transition takes place, where applicable. E.g., The Ethereum contract that locks up the asset while it's minted on another chain."
                          )
                          .optional(),
                      })
                      .strict(),
                    chain: z
                      .object({
                        contract: z
                          .string()
                          .describe(
                            "The contract address where the transition takes place, where applicable. E.g., The Ethereum contract that locks up the asset while it's minted on another chain."
                          ),
                      })
                      .strict()
                      .optional(),
                    provider: z
                      .string()
                      .describe(
                        "The entity offering the service. E.g., 'Gravity Bridge' [Network] or 'Tether' [Company]."
                      ),
                  })
                  .strict(),
              ])
            )
            .describe(
              "The origin of the asset, starting with the index, and capturing all transitions in form and location."
            )
            .optional(),
          ibc: z
            .object({
              source_channel: z.string(),
              dst_channel: z.string(),
              source_denom: z.string(),
            })
            .strict()
            .describe(
              "[OPTIONAL] IBC Channel between src and dst between chain"
            )
            .optional(),
          logo_URIs: z
            .object({
              png: z
                .string()
                .regex(
                  new RegExp(
                    "^https://raw\\.githubusercontent\\.com/initia-labs/initia-registry/main/(|testnets/|devnets/)[a-z0-9]+/images/.+\\.png$"
                  )
                )
                .optional(),
              svg: z
                .string()
                .regex(
                  new RegExp(
                    "^https://raw\\.githubusercontent\\.com/initia-labs/initia-registry/main/(|testnets/|devnets/)[a-z0-9]+/images/.+\\.svg$"
                  )
                )
                .optional(),
            })
            .strict()
            .optional(),
          images: z
            .array(
              z
                .object({
                  image_sync: z
                    .object({
                      chain_name: z
                        .string()
                        .describe(
                          "The chain name or platform from which the object resides. E.g., 'cosmoshub', 'ethereum', 'forex', or 'nasdaq'"
                        ),
                      base_denom: z
                        .string()
                        .describe(
                          "The base denom of the asset from which the object originates. E.g., when describing ATOM from Cosmos Hub, specify 'uatom', NOT 'atom' nor 'ATOM'; base units are unique per platform."
                        )
                        .optional(),
                    })
                    .strict()
                    .describe(
                      "The (primary) key used to identify an object within the Chain Registry."
                    )
                    .optional(),
                  png: z
                    .string()
                    .regex(
                      new RegExp(
                        "^https://raw\\.githubusercontent\\.com/initia-labs/initia-registry/main/(|testnets/|devnets/)[a-z0-9]+/images/.+\\.png$"
                      )
                    )
                    .optional(),
                  svg: z
                    .string()
                    .regex(
                      new RegExp(
                        "^https://raw\\.githubusercontent\\.com/initia-labs/initia-registry/main/(|testnets/|devnets/)[a-z0-9]+/images/.+\\.svg$"
                      )
                    )
                    .optional(),
                  theme: z
                    .object({
                      primary_color_hex: z
                        .string()
                        .regex(new RegExp("^#[0-9a-fA-F]{6}$"))
                        .optional(),
                      circle: z.boolean().optional(),
                      dark_mode: z.boolean().optional(),
                    })
                    .strict()
                    .optional(),
                })
                .strict()
            )
            .min(1)
            .optional(),
          coingecko_id: z
            .string()
            .describe(
              "[OPTIONAL] The coingecko id to fetch asset data from coingecko v3 api. See https://api.coingecko.com/api/v3/coins/list"
            )
            .optional(),
          keywords: z.array(z.string()).optional(),
        })
        .strict()
    ),
  })
  .strict()
  .describe(
    "Asset lists are a similar mechanism to allow frontends and other UIs to fetch metadata associated with Cosmos SDK denoms, especially for assets sent over IBC."
  );
