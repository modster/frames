// frames/index.js

import { NeynarAPIClient } from "@neynar/nodejs-sdk";

const main = async () => {
  const neynarClient = new NeynarAPIClient(
    "YOUR_API_KEY_HERE"//<------------------- replace this with your API key
  );

  const creationRequest = {
    name: "gm",
    pages: [
      {
        image: {
          url: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeifjdrcl2p4kmfv2uy3i2wx2hlxxn4hft3apr37lctiqsfdixjy3qi&w=1920&q=75", // <-------------------- replace this with your image URL
          width: 1920,
          height: 1080,
          aspect_ratio: "1.91:1", // todo: 1:1? 1.91:1?
        },
        title: "Neynar NFT minting frame", // <-------------------- replace this with your title
        buttons: [
          {
            action_type: "mint",
            title: "Mint",
            index: 1,
            next_page: {
              mint_url:
                "eip155:8453:0x23687d295fd48db3e85248b734ea9e8fb3fced27:1", // <-------------------- replace this with your mint URL
            },
          },
        ],
        input: {
          text: {
            enabled: false,
          },
        },
        uuid: "gm", // <-------------------- replace this with your UUID?
        version: "vNext",
      },
    ],
  };

  const frame = await neynarClient.publishNeynarFrame(creationRequest);
  console.log(frame);
};

main();

