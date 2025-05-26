# My Porfolio

This repository is intended for creating a personal porfolio to showcase my skills with the use latest Tech Stack and to create a digital footprint.

Currently, it is deployed on the link below:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) access the live website.

## Technology Stack Used

## Updates
1. Create the vite with react template

    npm create vite@latest my-react-app -- --template react

    npm install

    Install Dependency

    npm install react-router-dom

2. Feature: Navigation

    Navbar and Sidebar for responsive navigation (mobile view)
    - use media query


    Navigation Items

    const navbarItems = [
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Services",
            link: "/services",
        },
        {
            title: "Skills",
            link: "/skills",
        },
    ];


    Toggle Function for mobile view navigation

    - Set this on the context of App.js
    

