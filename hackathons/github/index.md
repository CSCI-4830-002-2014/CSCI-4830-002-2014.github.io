---
layout: hackathon
group: hackathon
id: github
---

# Timeline

| Show & Tell | 20 minutes |
| Project | 10 minutes |
| Challenges | 10 minutes |
| Hackathon | 100 minutes |
| Presentation | 10 minutes |
| Total | 150 minutes |

# Dataset

Data about this course's Github organization.

[https://github.com/CSCI-4830-002-2014](https://github.com/CSCI-4830-002-2014)

# Objective

1. Write a Node.js script to grab all the events about our class's repository.
2. Redo all the analyses in [Splunk III, Challenge 2](/units/splunk_3/) on the newer data.
3. Conduct new analyses on the events related to week 3 (challenge, project, hackathon) using Splunk.

# Prerequisites

* [Week 1 Learning Challenge](/challenges/1)
* [Week 2 Learning Challenge](/challenges/2)
* [Week 3 Learning Challenge](/challenges/3)

# Team

Form a team of four or five with other classmates. You should work with others who are already sitting at the same table. The teaching staff will walk around to facilitate team forming. Introduce yourself if you do not already know each other.


# Objective 1: Node.js program for grabbing events

__Problem:__ We want to retrieve all the events about the course from Github and save them in a JSON file to import into Splunk. But Github only returns one page of 30 events at a time.

__Desired Solution:__ A Node.js program that can make multiple calls to Github's API to retrieve events over several pages and combine the results into a single list (i.e., a JSON array).

## Installation 

You will need to install two Node packages:

1. [JavaScript GitHub API for Node.JS](https://github.com/ajaxorg/node-github)
2. [Async.js](https://github.com/caolan/async)

## Example

Below is a Node.js program for grabbing all forks of the repos for the three weeks challenges. Your task is to adapt this code for grabbing all events about our course's repository (or as many as allowed by Github).

{% gist doubleshow/95e3f43345de9b041183 %}

Download and try to run from a terminal:
	
	node getforks.js > forks.json

Open forks.json and you should see a list of forks as a JSON array.

## Template

You can use this Gist as a template to develop your program.

{% gist doubleshow/dffc8ee93ba17c1b1051 %}

## Useful References

* [Github API's pagination](https://developer.github.com/v3/#pagination)
* [node-github's Github page](https://github.com/ajaxorg/node-github)
* [node-github's API documentation](http://ajaxorg.github.io/node-github/)


| Github API | node-github |
| [GET /users/:username/followers](https://developer.github.com/v3/users/followers/#list-followers-of-a-user) | [user#getFollowers](http://ajaxorg.github.io/node-github/#user.prototype.getFollowers) |
| [GET /orgs/:org/events](https://developer.github.com/v3/activity/events/#list-public-events-for-an-organization) | [events#getFromOrg](http://ajaxorg.github.io/node-github/#events.prototype.getFromOrg) |

## Technical Discussion

* Why coding in Node.js? Why not Postman?
* What parameters to set to get Github's API to return data beyond the most recent 30 events?
* What parameters to set in JSON.stringify that are responsible for printing to the console in a pretty way?
* What is the role of the callback function in the call to _github.repos.getForks_? 
* Why is an asynchronous library needed?
* Why does _results_ need to be flatten?

# Objective 2: Redo Analyses

### 2.a. What is the distribution of push requests over Github accounts?

### 2.b. What are different event types compared over time for the whole class?

### 2.c. Who had the most number of pull request events?

### 2.d. How many different kinds of pull request actions were made?

### 2.e. What is the distribution of opened pull requests over Github accounts?

### 2.f. What is the submission pattern (i.e., pull requests) of the "Week 2 challenge" over time?

# Objective 3: Analyze Week 3

Come up with THREE interesting questions about week 3 (challenge, project, hackathon). For each question, compose a Splunk query and present a chart or table as an answer. Write one or two sentences to discuss your answer.

# Presentation

Your team will do a 3-5 minutes presentation to the entire class about the findings from your analyses.

# Submission

Use a Github repository to submit your work. Follow [this link](https://github.com/CSCI-4830-002-2014/hackathon-github) to find the template repository for this hackathon. Fork, modify, commit, push, and make a pull request, just like what you did for your other homework submissions.

