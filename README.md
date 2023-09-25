## Introduction
This step-by-step tutorial will walk you through building an email responder using the Nylas Email API using Generative AI. We will use the Nylas Quick Start guide to build the functionality, so we are not starting from scratch.

## Features
- Built (Nylas Quick Start Guide): User can read and send emails
- To Build: The user can generate an email response using the email body alone

## System Information / Prerequisites
This application is built using Node.js on the backend and React on the frontend. 

Most of the frontend work is done for us, so we will spend most of the time building the Email Responder using Generative AI.

**Tutorial Step 1.** Let’s check that our environment is set up to use the [Nylas Node SDK](https://github.com/nylas/nylas-nodejs). Check the Node version in your terminal:

```bash
$ node -v
v18.0.0
```

If you don’t see a version returned, you may not have Node installed. Try the following steps:

1. Visit [nodejs.org](https://nodejs.org/en/) to set up Node on your machine
2. _Recommended_: If you happen to use or require multiple Node versions, consider using [nvm](https://github.com/nvm-sh/nvm).

The minimum required Node version is `v18.0.0`. As a quick check, try running `node -v` again to confirm the version. You may need to restart your terminal for the changes to take effect.

Tip: Consider building on Github Codespaces if this helps simplify environment setup. We recently did a livestream on [how to build on Github Codespaces](https://www.youtube.com/watch?v=QZLq0A9AmZk).

## Security Note.
Do not share the values in the `.env` or `datastore.json` file publicly (ex., remote git repository); it contains sensitive information. We've added these to the `.gitignore` file of this repository.

We've provided an example file, `backend/example.env`, in this repository that you can duplicate with the correct credentials and rename as `.env`. The tutorial will show you how to get the correct credentials, coming soon!

## Step-by-Step Tutorial

### Setup Nylas Email API Account
We will be using Nylas to read & send emails. The Nylas Email API acts as a thin layer within your application to allow users to authenticate and connect to their communication data (Email, Calendar, and Contacts). By allowing your application to connect to your users' communication data, you can build powerful user features.

One reference to use during the tutorial is our [Nylas developer documentation](https://developer.nylas.com/)

#### Sign-up For Nylas (it's free!)
**Tutorial Step 2.** Head to [Nylas](https://nylas.com/wwc23-code) and sign up for your free account. We offer a free tier to get started and complete this tutorial.

### Download the Nylas Quick Start Guide to build locally.
This repository (main branch) is taken directly from the Nylas Quick Start Guides. 

**Tutorial Step 3.** Here are the steps to download it:
<img width="1606" alt="Screenshot 2023-07-24 at 3 35 32 PM" src="https://github.com/nylas-samples/node-email-responder-ai/assets/553578/85b65d2b-25f4-4bf7-85bc-d500373656db">

1. Click on Quickstart Guides after onboarding
3. Download the read-and-send email quickstart guide with the backend node.js and frontend react
4. If you download the Nylas Quick Start Guide locally, be sure to add a `.gitignore` file to prevent the `.env` file from being shared. Consider re-using the [.gitignore](https://github.com/nylas-samples/node-email-responder-ai/blob/main/.gitignore) from this repository.
5. Continue to the next section 🙂

Alternatively, you can clone the main branch:
1. If you are cloning the repository (main branch), you can retrieve the Nylas credentials from the Quick Start Guide steps (view Quick Start Guide step `2. Initialize the Nylas SDK`):

<img width="636" alt="image4" src="https://github.com/nylas-samples/node-email-responder-ai/assets/553578/712377a1-ba84-4e5d-852b-dfa675a3f934">

You can also find the keys from the Quickstart App settings:

![image1](https://github.com/nylas-samples/node-email-responder-ai/assets/553578/6603fefd-9752-43fe-b992-db047f3cec8a)

We’ve recently done a live stream on how to build on using the [Nylas Quick Start Guides](https://www.youtube.com/watch?v=3lRxcHmIZyA&t=1s).

Note: For `NYLAS_API_SERVER` we support both EU and US regions, so confirm which region you signed up for.  Read more about data [residenency on the Nylas docs](https://developer.nylas.com/docs/the-basics/platform/data-residency/)

### Setup Frontend/Backend for Development
**Tutorial Step 4.** Follow `/frontend` & `/backend` folder `README.MD` instructions to complete: a) initial setup and b) ensure the server(s) run locally. If everything goes well, you should see the below frontend application running on your machine:
<img width="1416" alt="Screenshot 2023-07-26 at 10 45 54 AM" src="https://github.com/nylas-samples/node-email-responder-ai/assets/553578/26e7b1d5-1332-4df6-81ea-3b7410f63bc9">

We'll move past this screen in the next steps!

Before we start coding (while you go through the next few setup steps), spend some time exploring the frontend and backend code for understanding before we start coding :)

### Authenticate an Account to Read & Send Emails
So what do we do next? 

We need to authenticate an account to access the communication data. Once we authenticate an account, we can access the user’s emails. To keep things simple, for our tutorial, we can authenticate our account to access our own emails. More on the application environment setup shortly (read on if you are curious before authenticating).

**Tutorial Step 5.** Sign in using your account and complete the steps to authenticate your account. You will see all the emails from your email inbox right afterwards:

![image](https://www.nylas.com/wp-content/uploads/image4-1.gif)

But I sense some magic going on. 🤔

We did not have to create an app on any service provider (i.e. Google API Project or Microsoft Azure) to authenticate accounts. So how are we able to connect an account and access our emails?

Well, the Quick Start Guides come with some magic, the magic being that we’ve already created a production application for all users that build using the Quickstart App. So this extra step is taken care of for us, and we can continue building our Email Responder. 🧙

We’ve recently done a livestream on how to set up a [Google API project for building with Nylas ](https://www.youtube.com/watch?v=n194ZoJpCSY&pp=ygUdaG93IHRvIHNldHVwIGdvb2dsZSBhcHAgbnlsYXM%3D) and how to set up an [Azure App for building with Nylas](https://www.youtube.com/watch?v=8luB4dJggtI&t=185s)

#### Checking the connected Account
**Tutorial Step 6.** To confirm that your account is connected and for future account management, visit the Nylas Dashboard Account's section:

<img width="1728" alt="Screenshot 2023-07-24 at 1 58 07 PM" src="https://github.com/nylas-samples/node-email-responder-ai/assets/553578/fa750491-8b34-4b11-8328-5411ef5b8aab">

### Testing Read & Send Emails
Does the application actually send emails? Let’s confirm that before moving on. 

**Tutorial Step 7.** Now that we can read emails, try clicking on an email and responding using the Nylas Quick Start guide to ensure that everything is working.

If you don’t want to send an email to an individual, you can consider updating the sender to yourself and sending an email to yourself to test out. Sending test emails will be useful for testing with generative AI. This doesn’t help with levelling up on our inbox zero 💪, but we’ll get closer to that with Generative AI soon.

### Setup Generative AI API Account (hint: 🤗)
There are a few options when it comes to using a Generative AI API. For this tutorial we will use the HuggingFace Inference API that allows you to access quite a few models from a single API. The additional benefit is that HuggingFace hosts the models and offers a free tier for everyone to make requests to any model that has support for the HuggingFace Inference API.

#### Sign-up For HuggingFace (it's free!)
**Tutorial Step 8.** Head to [HuggingFace](https://huggingface.co/join) and sign up for your free account. They offer a free tier to get started and complete this tutorial.

#### Create an Access Token
We will need the HuggingFace Inference API access token to be able to make calls to different models from our backend. 
**Tutorial Step 9.** Once you create an access token, add it to your `/backend/.env` file so we can use it when creating a service to make calls to different generative AI models. Update the `.env` to include `HUGGINGFACE_HUB_API_KEY`.

Note: You may need to verify your email before you can create an access token.

<img width="547" alt="image6" src="https://github.com/nylas-samples/node-email-responder-ai/assets/553578/8e81fd1c-a7e9-4079-a85f-66a04e74effe">

**Tutorial Step 10.** Test the HuggingFace API by creating a curl command in your terminal:
```sh
curl https://api-inference.huggingface.co/models/gpt2 \
        -X POST \
        -d '{"inputs":"The answer to the universe is"}' \
        -H "Authorization: Bearer "$HUGGINGFACE_HUB_API_KEY""
```

### Build a Service to call the Generative AI API
Next, let's create a file `backend/services/generative-ai.js` that will include all our logic for calling the different AI models. To use the HuggingFace Inference API, we need to include the npm package `@huggingface/inference`. The purpose of the service is to be used when the frontend calls a backend endpoint or route to create an email response using generative AI.

Check out the [hugging face inference API docs](https://huggingface.co/inference-api) to learn more about the hugging face inference API, including setup.

**Tutorial Step 11.** As a starting point, consider creating a function to generate a response using your chosen model. We commend trying the `gpt2` model from HuggingFace as a starting point. One way to easily test this out in isolation is by calling the running the newly created service directly using node and logging out the results: `node backend/services/generative-ai.js`.

Branch w/ Code Updates: `generative-ai-service`

[HINT] You may notice the first model you choose may be limited in functionality, we'll consider different models in the next section! Just try one or two out for understanding.

### Trying Different Generative AI Models for Email
Choosing the right model can be challenging, however, let's leave that for a post-tutorial exploration. For this tutorial, we've decided to use a model created by OpenAssistant. We came across this model when checking out HuggingChat which was using a different model by the same creator, OpenAssistant. We decided to use a model by OppenAssistant: `OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5`. Here is an example of using the model in the webview to get a better understanding:

<img width="1115" alt="hugging-face-web-implementation" src="https://github.com/nylas-samples/node-email-responder-ai/assets/553578/d182a73f-6a04-49ad-8481-e305a592f1bd">


We’ve recently done a live stream on [Creating Email Responses using Generative AI](https://www.youtube.com/watch?v=KNJWMGExt18) that serves as a gentle introduction to using the HuggingFace Interference API and exploring different models.

[TIP] Each model implementation is different so additional logic may be required when working with the model. A good approach is to view the network requests if available on a web version of the Model Implementation.

Model compute showing multiple network requests:
<img width="1309" alt="hugging-face-example-compute-network-requests" src="https://github.com/nylas-samples/node-email-responder-ai/assets/553578/2e6b3352-8835-4d9c-9040-820a91e46e01">


**Tutorial Step 12.** Before moving to the next sections, create additional functions in the Generative AI service to use the recommended model or any other model that will assist with email generation. Here are a few recommendations of generative AI model calls to consider:
- Use the `gpt2` model to complete an email given an initial few words to complete
- Use the `OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5` model to respond to an email given the email body

[TIP] For the purpose of the tutorial consider creating test emails to respond to. This will help simplify spending extra time on deciphering email messages and tweaking the model prompts. Something to explore post-tutorial!

We've recently done a live stream on [Exploring Prompt Engineering](https://www.youtube.com/watch?v=sqnMy5_n1hc).

Branch w/ Code Updates: `generative-ai-service-models`

### Build an Endpoint to Generate Email Responses

Now that we have a service to use to retrieve generated email responses, let's build an endpoint that will use the generative AI service to create email responses on demand. 

**Tutorial Step 13.** Before we jump ahead and integrate the generative ai service with the endpoint, for now just create an endpoint to test out with the frontend. So it's okay to return a static text like 'Okay' as the generated email response. You can call the endpoint `/nylas/draft-email-with-ai` and this will require updating the `backend/route.js` and `backend/server.js` files.

Some additional considerations for this endpoint are as follows:
- The backend received the message ID in the request body to retrieve the email body using the Nylas Email API
  - Consider looking at the backend code to see how this can be done
- Consider using the `string-strip-html` library to remove html from the email body for the generative AI service
  - We've gone ahead and created a `backend/utils/email-cleanup.js` utility that provides the functionality via `removeHtml`

Branch w/ Code Updates: `generate-draft-ai-endpoint`

### Connect Endpoint to Frontend

Now is a good time to get the frontend connected to the backend. This tutorial mostly focuses on using the Nylas Email API and a generative AI API, so I went ahead and provided a fully functional frontend to make the network request on user interaction (i.e. button click).

If you take a look at the `SendEmail.jsx` file from [this repository](https://github.com/nylas-samples/node-email-responder-ai/blob/main/frontend/src/SendEmails.jsx), we've commented out code that displays a button for the user to request a generated email response:

```
  {
    !isSending && (
      <button
        className={`outline ${style}`}
        disabled={!to || !body || isSending}
        type="generate"
        onClick={generateResponse}
      >
        Generate Respose w/ AI
      </button>
    )
  }
```

and 

```
  useEffect(() => {
      setBody('Enter a brief response for AI to generate a response');
  }, [])
```

Here is a [git diff showing the frontend functionality](https://github.com/nylas-samples/node-email-responder-ai/commit/7bcd645071830fc72e49534520229915c0892001) added to the `SendEmail.jsx` file for reference. It may be useful if you need to bring it over to your codebase.

Branch w/ Code Updates: `frontend-request-draft-email-reponse`

**Tutorial Step 14.** Once the commented code is uncommented, let's click the button and ensure that we receive a static 'Okay' from the backend. Once that's working, we know that the frontend and the backend are integrated, and we can start generating email responses!

### Generate Email Responses with just Email Body
So now we have all the pieces in place: frontend, backend, and generative ai service. Let's start by replacing the static 'Okay' with a call to one of the generated AI functions we created previously. 

**Tutorial Step 15.** If you've created the generative ai function to provide an email response based on the email body, consider using that. Alternatively, use any of the available functions you've created.

Branch w/ Code Updates: `generate-email-response-with-email-body`
