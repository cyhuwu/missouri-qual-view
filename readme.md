# USS Missouri Qualifications Database README.md

## Table of Contents

1. [To-do](#1-to-do)
2. [Website Treemap](#2-website-treemap)
3. [Current Frontend Flow](#3-current-frontend-flow)
4. [Database Credentials](#4-database-credentials)
5. [Update Log](#5-update-log)

***

## 1. To-do

- [ ] Complete the HTML frontend.
- [ ] Connect the frontend to the qualification data source.
- [ ] Replace the temporary access configuration with the production authentication and database setup.

***

## 2. Website Treemap ![GitHub tag (latest by date)](https://shields.io/github/v/tag/cyhuwu/missouri-qual-view)


**Apparently, production environment doesn't want you to put it into folders without redirecting all the paths.**  
DO NOT OPEN A FOLDER FOR FRONTEND

```
.
├── access.html
├── addqual.html
├── css
│   └── styles.css
├── images
│   ├── 17859146838312775321325180096476.jpg
│   ├── IMG_0064.webp
│   └── missouri.jpg
├── index.html
├── js
│   └── auth.js
├── md
│   └── RESET-PW.md
├── readme.md
└── .github
    └── agents
        └── missouri.agent.md

6 directories, 11 files
```

The HTML pages remain at the repository root because the production environment expects the frontend entry points there. CSS, JavaScript, images, and documentation are kept in their respective folders; moving the pages requires updating every relative asset and navigation path.

## 3. Current Frontend Flow

- `index.html` is the authenticated landing page for the USS Missouri qualification database.
- `access.html` provides the sign-in form and the transition to adding a qualification.
- `addqual.html` is the authenticated qualification-entry page placeholder.
- `js/auth.js` controls the current browser-session access flow and redirects unauthenticated visitors to `access.html`.
- `css/styles.css` contains the shared presentation, while `images/` contains the branding assets.

The current access logic is a frontend prototype. It should not be treated as production security until authentication and database access are moved to a trusted backend.

## 4. Database Credentials

### Link to Database

tbd

### Credentials

tbd

## 5. Update Log

- **2026-11-14 (`a7e2e9d`):** Reorganized the README around the root-level frontend layout and added the update log.
- **2026-11-14 (`f70825d`):** Corrected the image source path in `access.html` to use the shared `images/` directory.
- **2026-11-14 (`987385a`, `0ab8506`):** Clarified and emphasized the production deployment requirement that frontend pages stay at the root unless all relative paths are redirected.
- **2026-11-11 (`101156b`):** Reorganized the project into separate `css/`, `images/`, `js/`, and `md/` folders, with the HTML pages grouped under `html/` during the initial layout.
