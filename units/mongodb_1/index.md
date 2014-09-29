---
layout: unit
group: challenge
id: mongodb_1
---

This unit is meant for you to get MongoDB set up on your system and get some data into it. We will dig into MongoDB deeper over the following weeks.

Download Link:

[https://www.mongodb.org/downloads](https://www.mongodb.org/downloads)

# Checkpoints

## Checkpoint 1: Try It Out

MongoDB has a nice interactive tutorial online. The location is [http://try.mongodb.org/](http://try.mongodb.org/). Give it a try. Follow along. During the last several steps, replace the name "Johny Cash" with your own name. At the end, run _db.users.find()_. Take a screenshot of the results and submit.

## Checkpoint 2: Getting Started

Read these two short articles in MongoDB's official documentation:

* [Getting Started](http://docs.mongodb.org/manual/tutorial/getting-started/)
* [Generate Test Data](http://docs.mongodb.org/manual/tutorial/generate-test-data/)

You will first need to get MongoDB installed on your machine. Show that you can run

	db.testData.find().limit(3)

Take a screenshot and submit.

## Checkpoint 3: MongoDB + NodeJS

The objective is to learn how to use MongoDB in a NodeJS program. Then we can do all the cool things connecting MongoDB to various APIs to import data, an Express web server to serve data, or to D3 to visualize data ...etc. But first, get the NodeJS driver set up on your machine.

The official MongoDB driver for NodJS is described in the article [Node.js MongoDB Driver](http://docs.mongodb.org/ecosystem/drivers/node-js/) in the documentation. The Gibhub repo of this driver is: [https://github.com/mongodb/node-mongodb-native](https://github.com/mongodb/node-mongodb-native).

Install this driver using npm. Get the simple example the [Introduction](https://github.com/mongodb/node-mongodb-native#introduction) section to work on your machine. Take a screenshot and submit.

## Checkpoint 4: MongoDB + NodeJS + Github API

This sample script shows how you can grab data from the Github API (via Restler) and insert the data into MongoDB.

{% gist doubleshow/12ad9561203e6771bd2d %}

Get this script to work on your machine. Take a screenshot and submit.

# Challenges

For all the challenges, you should be able to build on the sample script above.

### 1. Course repos

Modify the script to retrieve the repositores associated with our course and store the data in mongodb.

[https://api.github.com/orgs/CSCI-4830-002-2014/repos](https://api.github.com/orgs/CSCI-4830-002-2014/repos)

Take a screenshot of your terminal output and submit. Also submit the code.

### 2. Course events (one page)

Write a script to retrieve the first page of events associated with our course and store the data in mongodb. Also submit the code.

[https://api.github.com/orgs/CSCI-4830-002-2014/events](https://api.github.com/orgs/CSCI-4830-002-2014/events)

Modify console.log() to print out something meaningful. Take a screenshot of your terminal output and submit. Also submit the code.

### 3. Course events (ten pages)

Write a script to retrieve ten page of events associated with our course and store the data in mongodb. You need to somehow incorporte the script you wrote for [https://github.com/CSCI-4830-002-2014/challenge-week-4/blob/master/github7.js](https://github.com/CSCI-4830-002-2014/challenge-week-4/blob/master/github7.js).

Modify console.log() to print out something meaningful. Take a screenshot of your terminal output and submit. Also submit the code.
