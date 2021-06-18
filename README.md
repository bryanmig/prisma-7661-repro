# Reproduction for Prisma/#7661

This will use the following dependencies
- Node `16.x`
- `pnpm` version `6.7.6`
- `rush` version `5.47.0`

Repro steps
- Install dependencies `rush install`
  (this will install dependencies and generate the Prisma client)
  
After installing and generating, you'll see that the client is generated in
[`apps/api/node_modules/.prisma`](apps/api/node_modules/.prisma) but the Prisma packages are installed in
[`common/temp/node_modules/.pnpm/@prisma+client@2.25.0_prisma@2.25.0`](common/temp/node_modules/.pnpm/@prisma+client@2.25.0_prisma@2.25.0).