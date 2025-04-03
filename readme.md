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

# To use any hook in the component -> mark the component as "use client"

# Exercise: Using useRouter in Next.js
The goal of this exercise is to practice using the useRouter hook in a Next.js application for programmatic navigation and accessing route information.
Instructions:
1. Create two routes: "pagel- and "page2•.
2. In ttw "pager route. create a simple landing page with a message and a button.
3. In the "page? route, create a second page with information or content.
4. Implement a programmatic navigation from "pager to "page? using the useRouter hook from Next. When the user clicks a button on •pagel."
they should be navigated to -page2.-
![methods]({7F319539-8583-47CB-A384-F21821F958A5}.png)


# Private pages
![private page]({62E0774C-3955-4D98-82F3-07B568141158}.png)

# Routes grouping
1. can be used to skip the route in next.js
![route grouping]({13D439E7-2C06-4587-B2CF-290DEB5CE5DE}.png)


# Exercise: Route Organization and Ignoring Routes in Next-js
The goal Of this exercise is to practice organizing routes using folders and excluding certain folders from treated as routes in a application.
Instructions:
1, Create the •users" folder (but it shouldn't be a route).
2. Inside the •users" folder create a "userinfo" route
3. Inside the •app- directory create another folder name "auth• but it (shouldn't be a route).
4. Inside the •auth" folder create a login route which will only print (Please Login To See The Content)


# Dynamic Routes
![e.g.1]({6BBA7861-DDF3-4947-B201-659A09D8DC9A}.png)
![e.g.2]({1530ABD7-CC9C-4421-ABB2-DED0698F672B}.png)
![e.g.3]({E6D9D306-9738-4147-A99E-80E284ACA142}.png)
![e.g.4]({69F9C808-0607-4627-B520-64C2B64E08CF}.png)

# Challenge: Create a Dynamic User Profile Page
1. Create a dynamic route to display user profiles based on their ID.
2. What should happen:
If you visit /users/l . the page should display "User Profile: 1".
If you visit /USerS/2 , the page should display "User Profile: 2".
The page should dynamically change based on the ID in the URL.


# Deeply nested routes - catch all rotues
![Deeply nested routes]({4499866C-71AE-48A0-B6E4-B0A658A1CC34}.png)

![opt1]({DD20711C-6EEE-4113-84DD-C51232EDE106}.png)
![opt2]({3243F689-15E1-45F8-B689-FBAE010186A7}.png)
![opt3]({4DE485DC-C9B6-4200-8369-78ECD9FD752C}.png)

![exercise]({9E2F5E92-2713-459A-9606-58CB30C755A4}.png)


# layout.tsx
In Next.js (App Router), layout.tsx is a special file used to define shared UI layouts across pages. It helps maintain consistent structures like headers, sidebars, and footers while allowing pages to update dynamically inside a persistent layout.
![nav-bar]({1B79371B-1773-4D71-B83C-97BAE4AF7E08}.png)
This navbar will be present at all the routes.
So, how can we effectivelly use it?
![wrapper]({4891E2F1-FB9A-4233-B521-1D8AFABA6BD1}.png)
![layout.tsx]({3F797E8C-1AF7-41F4-BEF5-E523D499223E}.png)

- You can't leave the root directory without making the Layout.tsx file

# Challenge: Layouts in Next-js
![exercise]({4B2D84CB-B1B1-4EB0-B71B-B1E4CD54F882}.png)


# Template.tsx
![template]({6D6065E4-EA8E-409C-AEAD-F4537F01C5FB}.png)
{3:20}