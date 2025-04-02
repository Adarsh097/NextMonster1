# Next-js

- Next.js is a popular open-source React framework that makes it easier to build fast and scalable web applications. It provides a lot of built-in features like SSR, SSG, API routes, and automatic code splitting, all of which help with performance and SEO.

# Fallbacks of React.js
![React.js - Demerits]({CB7E53DC-E545-4894-ABD0-56082BF6C113}.png)


# Merits of Next.js
![Next.js - merits]({572FA978-9337-4538-A090-4460CB607DB6}.png)

# Create Next.js App
![Create Next Appp]({ADD17C6E-5ABB-4D99-B326-59B08235C34D}.png)

- npm run dev : to run the server ->  http://localhost:3000

# Next.js Folder Structure

1. /.next
![.next]({2C07DEBA-F1E0-4FE8-9CF5-D15C24BEB11D}.png)


2. /node_modules
![node_modules]({9B82FEED-0754-40B1-BC6B-BE4E2058F05C}.png)

3. /public
![public]({DF5CE4DD-7A66-4B3D-92BC-DC333689C3DB}.png)

4. /src
![src]({B39DC712-94DE-42E2-8D15-17085D772544}.png)

5. .gitignore
![.gitignore]({8E953DF9-CAD6-4D35-81AA-FDDE18697E90}.png)

6. eslint.config.mjs
![eslint.config.mjs]({DC455FB8-C7C0-4A59-A5CF-6F81BDD33DB9}.png)

7. next.env.d.ts
![next.env.d.ts]({078014BE-930E-4B6C-8EB9-66357704712A}.png)

8. next.config.ts
![next.config.ts]({21341D54-1BF0-4F39-9C43-C14A55A45555}.png)

9. package-lock.json
![package-lock.json]({4B905845-6A6A-4E22-9C72-7395E615B0C1}.png)

10. package.json
![package.json]({A58A0E4E-D361-4971-A9EC-10078290933C}.png)

11. postcss.config.mjs
![postcss.config.mjs]({D6161E8B-FB81-47A8-A8A2-603F1DA391D9}.png)

12. tailwind.config.ts
![tailwind.config.ts]({9A0A361B-0949-47F7-B406-05CFB80A65F1}.png)

13. tsconfig.json
![tsconfig.json]({3F68EE25-5AD5-4E73-8594-69AACF0A0519}.png)

# Routing files

1. page.tsx -> you can't change the name.
![page.tsx]({8C82DAD5-D561-4131-B42F-91F9793E2D0C}.png)
![file based routing]({FC38D2BA-E2D0-4781-8291-66464AE82754}.png)
![each folder as route]({F6B6CF95-4D38-4E0B-87B7-B3F73940C3A5}.png)
![home route]({6F1EA4AD-7289-489F-AB22-5869252C689E}.png)
![nested routes]({1EE4C9ED-713F-4991-AFC4-FDE9DCD9C709}.png)
![about nested route]({71798712-776E-4625-BB4E-ECF6C83BD299}.png)
![about nested route]({BB55987E-FED6-419A-BD55-F48AD8F0807F}.png)

# Exercise: Basic Routing in Next.js
The goal Of this exercise is to create a simple Next.js application with multiple pages and implement basic routing using
Nextjs built-in routing system.
Instructions:
1. Create a new Next.js project.
2. Create two routes named "about" and "contact".
3. Verify that you can navigate between the "about" and "contact" pages.

# Linking and Navigating
![Linking and Navigating]({9C2329B5-EC8D-4BE4-A385-C543FFFCB066}.png)


# COMPLETED DASHBOARD PROJECT

# Exercise: Nested Routes in Next.js
The goal of this exercise is to demonstrate understanding of how to create nested routes in a Next.js application,
Instructions:
1. Create a "products- route and inside that same folder create two more folders name "allproducts• &
"specificproduct-
2. Inside the "allproducts- folder create a component which will show this text: -(1220) products in the store"
3. Inside the "specificproduct" folder Create a Component which will show this text: "Here is my one & only product"

 
 # Redirecting 
 ![Redirecting]({5638BBE6-31F0-48E2-861F-409661620D39}.png)

#Exercise: Linking and Navigation in Next.js
The goal Of this exercise is to practice using Next.js•s component for client-side navigation in a Next.js
application.
Instructions:
1. Create two routes "home" and "dashboard"
2. In the "home" route, create a simple landing page with a welcoming message and some content.
3. In the "dashboard" page, create a dashboard with various components, such as a navigation menu, user profile, and
other related information.
4. In the "dashboard" route, implement a navigation menu that includes links to the "home- page and other sections
within the dashboard.
5. Use Next.js's <Link> component to create these navigation links. Ensure that clicking on these links navigates the
user to the corresponding pages within the application without a full page refresh.

