# Build an Email Responder with Generative AI and Nylas

## Introduction

## Goals

## System Information / Prerequisites

Tip: Consider building on Github Codespaces if it helps simplify environment setup.
[TODO] Add a recommended Codespaces setup

## Security Note
Do not share the values in the `.env` file publicly, it contains sensitive information. We've added it to the `.gitignore` file of this repository.

We've provided an example file, `example.env` in this repository that you can duplicate with the correct credentials and rename as `.env`. The tutorial tells you how to get the correct credentials.
[TODO] `.example.env`

## Step-by-Step Tutorial

### Setup Nylas Email API Account
We will be using Nylas to read & send emails.
[TODO] Q: Why - add more details on how this works and why we are going to use it.

1. Sign-up For Nylas (it's free!)

### Download the Nylas Quick Start Guide to build locally
[TODO] Insert Related YT Video
This repository (main branch) is taken directly from the Nylas Quick Start Guides. Here are the steps to download it:

1. Click on Quickstart Guides after onboarding
2. Download the read-and-send email quickstart guide in node.js / react
3. Follow the rest of the steps in this tutorial
4. If you downlaod the Nylas Quick Start Guide locally, be sure to add a `.gitignore` file to prevent the `.env` file from be shared. Consider re-using the `.gitignore` from this repository.

Alternatively, you can clone the main branch:
1. If you are cloning the repository (main branch), you can retrieve the Nylas credentials from the Quick Start Guide steps (view Quick Start Guide step `2. Initialize the Nylas SDK`):
[TODO] Insert Image of Keys Unrevealed

You can also find the keys from the Quickstart App settings:
[TODO] Insert Image of Keys Unrevealed

### Setup Frontend/Backend for Development
1. Follow `/frontend` & `/backend` folder `README.MD` instructions to complete: a) initial setup and b) ensure the server(s) are running
2. If everything goes well, you should see the below frontend application running on your machine:
[TODO] Image

We'll move past this screen in the next steps! 

Before we start coding (so while you go through the next few setup steps), spend some time exploring the frontend and backend code for understanding before we start building :)

### Authenticate an Account to Read & Send Emails
[TODO] Explain what this is about and why we need to do this
[TODO] Giphy of this work flow
[TODO] Add Image of Nylas Dashboard to confirm authentication

### Testing Read & Send Emails
[TODO] Image of viewing emails

### Setup Generative AI API Account
[TODO] Which ones are we using and why
[TODO] Images of retrieving access token

Update `.env` to include `HUGGINGFACE_HUB_API_KEY`.

### Build a Service to call the Generative AI API (hint: 🤗)
[TODO] Expand on this
[TODO/Next] Create Seperate Branch w/ Code

Branch w/ Code Updates:

### Trying Different Generative AI Models for Email
[TODO] Insert Related YT Video

### Build an Endpoint to Generate Email Responses
[TODO] Which ones are we using and why
[TODO] Create Seperate Branch w/ Code

Branch w/ Code Updates:

### Generate Email Responses with just Email Body
[TODO] Giphy of this flow
[TODO] Create Seperate Branch w/ Code

### Generate Email Responses with Email Body & User Inputs
[TODO] Giphy of this flow
[TODO] Create Seperate Branch w/ Code

Branch w/ Code Updates:

## Commits && Branches
This section is an overview of different commits and branches for reference

- [Initial read and send email with .gitignore](https://github.com/nylas-samples/node-email-responder-ai/commit/1143c8d8cbbb4002a7a8dddeaafe64ca795a07c7)