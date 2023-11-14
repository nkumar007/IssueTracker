# Issue-Tracker

### Features of the app

- Users can add issues, all the newly added issue's status will be set as OPEN until it changes.
- On the dashboard latest issues can be seen. And there is a brief about all the issues with specific number of statuses.
- A Bar Chart is used to display the statuses by their kind [OPEN, CLOSED, IN_PROGRESS]

### Tech Stack

- Next.js [Typescript] is used both on the frontend and backend.
- MySql is used as the Database engine.
- Prisma is used as the ORM.
- NextAuth is used for user Auth.
- Tailwind CSS and RadixUI for building the UI.

## Getting Started

#### To get started, follow these steps:

1. Clone this repository to your local machine.
2. In the project folder, rename **.env.example** to **.env** (no period after).
3. Set **all** the environment variables according to the instructions I've included in the file. If you don't set them properly, the application is not going to work.
4. Run `npm install` to install the dependencies.
5. Run `npx prisma migrate dev` to generate your database tables.
6. Run `npm run dev` to start the web server.

### Some features yet to be added:

1. Implement a descending sort on the Issue List page.
2. Add a drop-down list to select the page size.
3. On the Issue Detail page, add a drop-down list for changing the status of an issue (similar to how we have a drop-down list for changing the assignee).
4. When an issue is assigned to a user, automatically set the status to IN_PROGRESS.
5. Implement the ability to filter issues by assignee.
6. Introduce a feature to add comments below an issue
