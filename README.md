<h1 align="center">Welcome to Amber User Data Assessment 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ChiromboKenT/user-data-assessment#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  
</p>

> Scalable Fullstack application that provide a React Frontend and NestJs Backened

### 🏠 [Homepage](https://github.com/ChiromboKenT/user-data-assessment#readme)

## Prerequisites

Download and install the latest version of Docker Desktop.

- [Download for Mac](https://docs.docker.com/desktop/mac/install/)
- [Download for Windows](https://docs.docker.com/desktop/windows/install/)

For development, you will only need Node.js and a node global package, npm, installed in your environement.

- Docker
  To deploy to production You need an AWS Account

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.11.3

    $ npm --version
    6.1.0

### Install

```sh
 (cd user-data-assessment && npm install)

```

## Usage Locally

### Run Backend

- Navigate to user-data-assessment folder then api folder

```sh
  cd api && yarn start
```

### Run Frontend

- Navigate to user-data-assessment folder then client folder

```sh
  cd client && npm start
```

### Open Application

- Open application on <a href="http://127.0.0.1:5000/" target="_blank">http://localhost:5000/</a>

## Usage Docker Locally

- Navigate to user-data-assessment folder

````sh
##Dev
docker-compose up -d --build


### Open Application

- Open application on <a href="http://127.0.0.1:80/" target="_blank">http://localhost:80/</a>

## Deploying to AWS ECS

### Requirements

    - Have an AWS Account
    - To ensure that Docker ECS integration is allowed to manage resources for your Compose application, you have to ensure your AWS credentials has at least the following permissions:
        application-autoscaling:*
        cloudformation:*
        ec2:*
        ecs:*
        elasticloadbalancing:*
        iam:AttachRolePolicy
        iam:CreateRole
        iam:DeleteRole
        iam:DetachRolePolicy
        iam:PassRole
        logs:CreateLogGroup
        logs:DeleteLogGroup
        logs:DescribeLogGroups
        logs:FilterLogEvents
        route53:*
        servicediscovery:*

### Step 1

create an Amazon ECS Docker context named myecscontext

```sh
  docker context create ecs myecscontext
````

### Step 2

- Run a Compose application
- Ensure you are using your ECS context. You can do this either by specifying the --context myecscontext flag with your command, or by setting the current context using the command docker context use myecscontext

## Author

👤 **Kenny Chirombo**

- Github: [@ChiromboKenT](https://github.com/ChiromboKenT)
- LinkedIn: [@chirombokenny](https://linkedin.com/in/chirombokenny)

## 📝 License

Copyright © 2022 [Kenny Chirombo](https://github.com/ChiromboKenT).<br />
This project is [ISC](https://github.com/ChiromboKenT/user-data-assessment/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
