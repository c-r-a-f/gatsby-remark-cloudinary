# gatsby-remark-cloudinary-test

Proccesses images in Gatsby's remark using Cloudinary.

Creates `<img>` tags from images in markdown.

## Install

```bash
npm install gatsby-remark-cloudinary-test
# or
yarn add gatsby-remark-cloudinary-test
```

## Usage

```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-cloudinary-test',
            options: {
              cloudName: '...',
              apiKey: '...',
              apiSecret: '...',
            },
          },
        ],
      }
    }
  ]
}
```
