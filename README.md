<a name="readme-top"></a>

<h3 align="center">File Uploader</h3>
    <p align="center">
  <b><a href="https://astroflexx-file-uploader.up.railway.app/" >astroflexx-file-uploader.up.railway.app</a></b>
  </p>
  <p align="center">
  A cloud storage application built with Express using Prisma, Postgres, PassportJS and EJS. Hosted on Railway.
  </p>
</div>

<!-- ABOUT THE PROJECT -->

[![Folder Page Screenshot][folder-screenshot]](https://astroflexx-file-uploader.up.railway.app/)

## About The Project

This was a project assignment from The Odin Project's 2024 Node course update. The brief was to create a stripped down version of Google Drive using Express and the templating engine EJS.

### Key Features
* **Folder Management**: Create, organize, and navigate folder structures with web components.
* **Sorting**: Sort items by name, size, or creation date in the main view.
* **Folder Sharing**: Share folders using a public access interface.
* **Direct File Sharing**: Generate direct download links for individual files.
* **Access Control**: Set expiration dates for shared folders and files.
* **User Feedback**: Use loading states and display popover alerts to provide clear feedback.
* **Accessibility**: An inclusive experience with support for assistive technologies and keyboard-only navigation.

### Additional Features
* **Authentication**: Secure user sessions with PassportJS and Prisma Session Store.
* **Cloud Storage Integration**: Securely manage file uploads and downloads with Supabase Storage.
* **Error Handling**: Centralized error handling middleware.
* **Performance Optimization**: Caching, bundling and compression of static assets.
* **Security**: Protected against common vulnerabilities with Helmet.
* **Form Validation**: Real-time form validation providing live feedback in forms.
* **Modular Architecture**: Application structured by feature and split into layers for modularity and maintainability.
* **Type Safety**: All backend code written in Typescript.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

#### 1. **Database Setup:** 
Set up a local PostgreSQL database.

#### 2. **Supabase Setup:** 
Create a project and set up a private storage bucket on [Supabase](https://supabase.com/).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/freehostingaccount1/file-uploader.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up .env file
   ```
   PORT=
   DATABASE_URL=
   SESSION_SECRET=

   SUPABASE_URL=
   SUPABASE_SERVICE_ROLE_KEY=
   SUPABASE_BUCKET=
   ```
4. Migrate the database
   ```sh
   npm run migrate 
   ```
5. Build the application 
   ```sh
   npm run build 
   ```
5. Start the development server
   ```sh
   npm run dev
   ```

<!-- ROADMAP -->

## Roadmap

- [ ] Create unit tests, integration tests and snapshots using Vitest

[folder-screenshot]: screenshots/folder-view.png
