# About challenge

1. In a real world scenario, I would almost never go for a Javascript application, but a Typescript one, as it makes debugging, readability and maintenance of the application extremely easy. It also makes integration with the wider ecosystem even easier. For example, libraries like graphql-requests or apollo graphql would be much better choices for data fetching solutions with a graphql api, but without typescript, the extra bundle is almost not worth it as there's minimal added benefits to just using a solution like fetch or axios.

2.

## Technology choices

- `React-query` for data fetching and in memory query caching. I decided to use this library because it makes handling common data fetching problems extremely easy, like error, loading and caching states of the responses. It also makes it easy to encapsulate reusable queries using hooks.

- `Axios` for API requests. I decided to use this library because it has the most browser compatibility, has great support for promises, and would most likely be the most familiar for any developers joining the team. I decided not to use a graphql native library like apollo or graphql-requests because this project does not use Typescript, so the additional bundle overhead would not be worth it. In a real world scenario, I would be using Typescript alongside a library like apollo or graphql-requests to ensure fully typed api calls.

So the trade off here was: Use Axios and write really ugly queries, because using another solution with no type safety would not be worth the extra bundle size.

Debatable, but I wouldn't use Javascript in a project just so making choices around maintainability are much easier.

- `Shad-cn and radix components` for the UI components. Easy to pull in well designed, highly accessible components without spending too much time with problems like theming, accessibility
  and CSS.

- `TailwindCSS` - In my experience, it provides the fastest CSS productivity for frontend engineers in the long run. Lowest maintenance, and highest and most performant CSS bundle optimisation strategy for the frontend.

- `Biome` - I use the biome formatter for setting a standard for code formatting, enabling easy formatting of the code so we keep the exact same standards across the codebase. Biome is many times faster than prettier, and also comes with a powerful linter and autofixer.

- `use-debounce` - When a user searches in the input, we want to limit the number of unnecessary API calls. This library helps us to debounce the search input so we only make a request when the user has stopped typing for a certain amount of time.

## Code structure

- `Services - src/services` - This is where we keep all the external communication services like API calls. Separating this logic allows us to completely encapsulate API communication outside of our application, allowing us to swap out an API if we ever change our minds, like migrating from GraphQL back to REST. Also allows for easy mocking during tests.

- `Pages - src/pages` - On the web our website is organised into pages. Any developer reading the codebase can easily identify which react components correspond to which page on the site as they can clearly see this folder.

- `Utils - src/utils` - Reusable snippets of used for things like styling, text formatting and other small tasks.

- `Tests - src/tests` - My mindset behind tests is to not write unnecessary ones. Instead, we write tests that focus on the user experience. In this case, I wrote 2 examples: - fetches and displays all game genres when user visits page - fetches and displays all games when user visits page - filters games by name when user types in the input search field - filters games by genre when user selects a genre checkbox - filters games by live status when user selects a live status checkbox
  The last 3 are in todo, as I was trying to keep this challenge under 4 hours.

- `UI - src/ui` - Reusable components that can later be extracted into a separate design system for the company. These are completely detatched from the business logic of the application.

- `Pages components - src/pages/[page]/components` - To keep our pages small and manageable, we break down the pages into smaller components and keep them in a components folder of that specific page. This allows easy finding of the component when ready the code, and also clear demarcation of where components are used. Reusable components across pages that are not UI components should be placed in the `/src/components` folder instead.

## Areas for improvement

- As I completed this challenge, If I had more than four hours, I would do the following:

1. A better Git history. I sped through everything to ensure I completed the key features before my time ran out. Ideally, I would break this task down into 5 commits, and 3 pull requests. The first pull request would be the initial setup of the project, the second would be the implementation of the search feature, and the third would be the implementation of the filter feature. This would allow for a much cleaner git history, and also allow for easier code reviews.

2. I would write the tests I have in Todo as they capture very important parts of the user experience.

3. I would switch the codebase to Typescript. This would allow a fully typed codebase which is much cleaner and easier to maintain in the long run for the entire engineering team.

4. I would add End to end tests. They tend to be really helpful to make sure the UI and the API are working together as expected.

5. I would add a CI/CD pipeline. This would allow for automated testing and deployment of the application.

6. I would migrate from CRA to vite. Vite is much faster than CRA, and would allow for faster development and testing of the application. CRA is just way below industry standards.
