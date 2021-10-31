# HMR-PDF

HMR-PDF is a PDF making utility made with [Astro](https://astro.build/) and [Paged.js](https://www.pagedjs.org/).
HMR-PDF helps you create PDFs using markdown in a hot module reloading environment. Meaning you will see the changes update live.

![demo](/public/assets/images/hmr-pdf-demo.png)

## How to use

Simply write your markdown in **Content.astro** (`/src/components/Content.astro`) and whenever you save the file you will see the changes update in the browser.

## How to save the PDF

To save the PDF you need to print the page to a PDF (usually `File > Print` or `CTRL/CMD + P`).

Make sure to use the following settings:

- Margins are set to _none_,
- "Print headers and footers" is _unchecked_ or set to _none_,
- "Print backgrounds" is _checked_.

Then just save the PDF to your prefered path and open it with your favorite PDF reading tool.

## Commands

All commands are run from the root of the project, from a terminal:

| Command       | Action                                      |
| :------------ | :------------------------------------------ |
| `npm install` | Installs dependencies                       |
| `npm run dev` | Starts local dev server at `localhost:3000` |

## Changes

You can easily change the text/background color, font family and the number of pages on screen at a time (for bigger monitors maybe?).

To do this you have to update the css variables in `/public/style/interface.css` or add your own styles in `/public/style/global.css`.
