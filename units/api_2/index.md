---
layout: unit
group: challenge
id: api_2
---

(This is a part of [week 4's learning challenge](/challenges/4/))

[Restler](https://github.com/danwrong/restler)

Your challenge is to learn how to use [restler](https://github.com/danwrong/restler), a RESTful client library in Node.js, to make calls to Github's APIs. Recall that in the previous hackathon, you were asked to use node-github, which is a wrapper library specifically for Github. restler, on the other hand, is a general-purpose library for any API.

# Challenges

## Challenge: Revisit Github

Repeat all the six Github API challenges you did in the previous week. But instead of Postman, you will write in Javascript using restler. For each challenge i, write a script that can be run from a command line and will output the result to stdout. You should be able to save the result to a file like below

	node github{i}.js > result{i}.json

where N = 1 to 6. Submit both the javascript file and the result json file. You should be able to find skeleton code in this week's [template Github repository](https://github.com/CSCI-4830-002-2014/challenge-week-4).

### 1. What are some public repositories on Github?

(Reference: [List all public repositories](https://developer.github.com/v3/repos/#list-all-public-repositories))

### 2. What are the repositories of our course's organization?

(Reference: [List organization repositories](https://developer.github.com/v3/repos/#list-organization-repositories))

### 3. What are the forks from the repo of the week 1 challenge?

(Reference: [List forks](https://developer.github.com/v3/repos/forks/#list-forks))

### 4. What were the pull requests made to the week 1 challenge that have been _CLOSED_?

(Reference: [List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests))

### 5. What were the contributions made to your team's "accesslog hackathon"?

(Reference: [Get contributors list with additions, deletions, and commit counts](https://developer.github.com/v3/repos/statistics/#contributors))

### 6. How can an issue be created via Github's API?

(Reference: [Create an issue](https://developer.github.com/v3/issues/#create-an-issue))

### 7. What are all the latest events related to our course's organization?

Use the Aync library (i.e., map) to grab data from page 1, 2, 3 to 10 and combine the result, similar to what you did in the hackathon.

