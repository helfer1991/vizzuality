This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The link for the production version (deployed in Vercel, as requested): https://vizzuality-owi8.vercel.app/

## Run locally

If you want to run the app locally just create a .env.local file and past this:
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoiaGYxOTkxIiwiYSI6ImNtM3g5NHJjeDFieDcya3IwMndtY2o5bjAifQ.kn5BTzYkCTH47z5LBJZ2kQ

## Tech stack

- Next.JS;
- Typescript;
- React-Query (for server-side state management);
- React Context for client side globalized management;
- Tanstack-Table for the table (due to its close relationship with React-Query);
- ShadCN as requested for some components, like the forms, popover, etc;
- Tailwind for styling (although some pure CSS is used);
- Mapbox for the maps.

## Requirements

As stated on the challenge requirements (please refer to https://github.com/Vizzuality/front-end-code-challenge/blob/master/mid-senior/README.md and check the App structure section), every requirement has been attended, including the ones marked as BONUS.

I would have liked to have created unit tests for, at least, some of the components that require a reasonable amount of functionality. Although not specified in the requirements, I am a firm supporter of unit tests and automated tests not only to increase the maintainability of the software, but also its robustness and minimize the amount of regressions. Nevertheless, due to time constraints provoked by work and personal problems, I was not able to create them. However, if I would have done it, I would have configured the application with Vite (due to its higher speed than Jest as a test runner) and would have used React-Testing Library.

Possibly, provided I had the time, some kind of e2e tests could be created using Playwright.

In any case, the application has 2 main routes: "/" and "/networks/[id]". Pagination has been implemented and it is reflected on the URLs. The reason is simple: not only is a standard practice, but it also enables the user to bookmark a specific page, to share a link for a specific page, it helps with browser history navigation and, finally, it's just better for SEO purposes. Hence, whether the user is in the root page, or in the page of any of the city bike networks, the current page will be displayed in the URL.

Regarding the data fetching, for the root page I have used standard fetch with NextJS (a server component, therefore). It doesn't have to be constantly revalidated, or updated. Or, in other words, the data requirements are stable.

For the individual page of each city bike network, however, I picked React-Query. Not only is it a server state management tool I'm experienced with, but it's more suited to data that has to be frequently updated, for example. In this regard, the initial fetch is prefetched. By prefetching data it improves the user experience by fetching everything that's needed at the beginning of the interaction.

Also, I have included skeletons for each page. I could have used a loading spinner, but in my opinion, a better UI/UX is achieved with skeletons, as it provides the user with a resemblance of how the page will look like.

As for Tanstack-table, I just used, because that's the only tool I have used so far to build tables (aside from native html). And since it integrates well with React/Tanstack-Query that was it.

As for the map, I have worked once with Maptiler. However, on that experience there were several bundling issues when I used Maptiler with typescript, hence I decided, advised by a friend, to use Mapbox. Suffice to say, I retrieved the style.json from an example codebase.
I had to use javascript/typescript (and not React) on some parts of the map components. As I'm not very experienced with maps, that was the only way I found to make it work.
