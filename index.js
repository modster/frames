import 'dotenv/config'
import { NeynarAPIClient } from "@neynar/nodejs-sdk";

const id = "only_you_see_this" // <-------------------- replace this with your title
const imageUrl = "" // <-------------------- replace this with your image URL
const mintUrl = "" // <-------------------- replace this with your mint URL
const  title = "The Frame Title" // <-------------------- replace this with your title

const main = async () => {
  const neynarClient = new NeynarAPIClient(
    `${process.env.NEYNAR_API_KEY}`
  );

  const creationRequest = {
    name: id,
    pages: [
      {
        image: {
          url: imageUrl,
          width: 1920, // TODO: cloudflare variants 
          height: 1080,
          aspect_ratio: "1.91:1", // TODO: 1:1? 1.91:1?
        },
        title: title,
        buttons: [
          {
            action_type: "mint",
            title: "Mint",
            index: 1,
            next_page: {
              mint_url: mintUrl,
            },
          },
        ],
        input: {
          text: {
            enabled: false,
          },
        },
        uuid: id, // TOD: should we use a real uuid here?
        version: "vNext",
      },
    ],
  };

  const frame = await neynarClient.publishNeynarFrame(creationRequest);
  console.log(frame);
};

main();

