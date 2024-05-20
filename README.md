# Resumer

Resumer is a web application designed to help users create and manage their resumes. It offers a user-friendly interface for inputting personal information, skills, work experience, education, and projects, and generates a formatted resume that can be exported to PDF.

## Features

- **Personal Information Management**: Input and update your contact details.
- **Skills**: Add and categorize your skills.
- **Work Experience**: Document your job history with detailed descriptions.
- **Education**: Record your educational background.
- **Projects**: Showcase your projects with descriptions and timelines.
- **PDF Export**: Generate and download your resume as a PDF.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12.x or later)
- [npm](https://www.npmjs.com/) (version 6.x or later)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/u-hashmi/resumer.git
    cd resumer
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

    The application should now be running on `http://localhost:3000`.

## Project Structure

- **/src**: Contains all source code for the application.
  - **/components**: Reusable React components.
  - **/pages**: Main pages of the application.
  - **/styles**: CSS and styled components.
  - **/utils**: Utility functions and constants.

## Main Components

### `PageArea`

The `PageArea` component is responsible for displaying the main content of the resume, including personal information, skills, work experience, education, and projects.

#### Props

- `resumeData`: Object containing all the resume information.
- `visibility`: Object controlling the visibility of different sections.

#### Example

```jsx
<PageArea resumeData={resumeData} visibility={visibility} />
