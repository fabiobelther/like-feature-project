# “Like” Button Feature Project

The “Like” button serves two primary use cases:
- When a user visits an article, a like button is rendered and displays the total number of likes
- When a user clicks the like button, the count increments by one.

This project is client-side(front-end) of application. 
To see about the server-side(back-end) go to: https://github.com/fabiobelther/LikeFeatureProject.Api.git


## Overview

This project is a React implementation using Axios to server calls and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Getting Started

To clone this project you need to install [Git](https://git-scm.com).
To run this project you need to download [Visual Studio Code](https://code.visualstudio.com) or [Visual Studio 2019](https://visualstudio.microsoft.com/). 
And you need to install [NodeJS](https://nodejs.org/en/download/) to run the project.


### Cloning

Go to path and run the command on GitBash terminal

```powershell
git clone https://github.com/fabiobelther/LikeFeatureProject.git
```

### Installing

In the project directory, execute the command to install all the dependencies:

```powershell
npm install
```

### Run the Server Side

Before you run the client-side project you need to run the server-side.
Look the source code here: https://github.com/fabiobelther/LikeFeatureProject.Api.git


### Running

When the install is finished and the server-side is up, execute this command to run the projet:

```powershell
npm start
```

The main page should open automatically. If not, go to:
[http://localhost:3000](http://localhost:3000) to view it in the browser.



## Improvements

- How can you improve the feature to make it more resilient against abuse/exploitation 
  - To avoid abuse or the use of robots to generate a huge amount of likes in an article we could:
    - In the front-end create a variable where we would limit the amount of likes (for example, set a maximum of 3), and after reaching the value disable the like button.
    - We could record the ip from the user in a NoSql database like redis and with that, we would limit the amount per article or time.
    - It was not informed that there would be an option to "dislike" in the business rule. If was possible, this action would inhibit abuse, allowing the app user to like the article just once.
	 
- How can you improve the feature to make it scale to millions of users and perform without issues?
- A million concurrent users clicking the button at the same time 
- A million concurrent users requesting the article's like count at the same time
  - The solution was built in microservices, however the relational database can be a bottlenecked, to solve these possible problems we could:
    - Record the current number of likes of the article in a NoSql database like redis, and according to Gets requests they would look directly at it.
    - When making a Post, we would use a Queue as AWS SQS or Rabbit asynchronously, and when making a transaction, it would update the key in the NoSql bank.
    - After that we would make a callback to the Front-end with the new value of likes.


## Built With

* [React](https://reactjs.org/) - React documentation
* [NodeJS](https://nodejs.org/en/download/) - JavaScript runtime  - the project was created in version 12.16.1
* [Axios](https://github.com/axios/axios) - Axios


## Contributings

## Authors

* **Fabio Belther** - *Initial work* - [FabioBelther](https://github.com/fabiobelther/)

See also the list of [contributors](https://github.com/fabiobelther/LikeFeatureProject/contributors) who participated in this project.