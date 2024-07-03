# modster/frames

[source](https://docs.neynar.com/docs/how-to-create-frames-using-the-neynar-sdk#creating-the-frame)

It should return an object similar to this when you run your script, copy the link from here and enter it on the Warpcast validator. Enter your URL and you can inspect the properties of your frame here.

Mint button won't work in the validator, to test out the mint button you'll need to create a new cast.

The publishNeynarFrame function accepts an object with a bunch of parameters, let's take a look at what they are:

- `name`: This will be the name of your frame and it will be visible only to you on your dashboard

- `pages`: This will be an array of the pages to display on the frame, the parameters here are just what you would typically pass in, in a frame like image, title, buttons, input, version, etc.

- `next_page`: This is where you define what happens when you click the button, since we are creating an NFT minting frame it contains the mint_url. But you can pass in redirect_url to redirect to a new page or uuid of a new page, to change the current frame page.

- `mint_url`: This is a string I have created by data from a collection on zora. The string should be of the form "eip155:chainId:contractAddress:tokenID". The contract address and token ID can be found from the Zora share URL which looks somewhat like this https://zora.co/collect/base:0x23687d295fd48db3e85248b734ea9e8fb3fced27/1, you can check out the corresponding chainId of your chain here. For example, chainId for base is 8453.
