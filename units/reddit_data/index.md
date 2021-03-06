---
layout: unit
group: challenge
id: reddit_data
---

We are going to start with a simple walk-through using the Reddit Dataset

# Challenges
(each challenge is worth 5 points)

## Challenge 1

Download the Reddit data

Follow [this link to the data](http://www.reddit.com/r/datasets/comments/1mbsa2/155m_reddit_comments_over_15_days/)

Now you have the choice to import the data into MongoDB or play with it raw - whichever your prefer.

Submit a screenshot of either a query or a snippet of the data raw to show you have it

## Challenge 2-4

Take a look at what's in this dataset and answer the following questions.

* What do you find interesting in this dataset?  Provide examples
* What insights do you believe you could gain from analyzing this dataset?
* What do you think this dataset would tell you about the Reddit Community as a whole?

## Challenge 5

Answer Micha's sample question!  Use whatever method you'd like to estimate.  There is no definitive right or wrong answer, the point here is to TRY SOLVING THIS PROBLEM  We'll point you to how Micha answered this question.

* Which two of the top 50 subreddits share the most common commenters?  (i.e., try to find the 2 subreddits that share the most number of users commenting in them)

Submit a code snippet and an answer to this question

Micha answered this question using a [Jaccard Distance](http://www.google.com/url?q=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJaccard_index&sa=D&sntz=1&usg=AFQjCNEVx641Q05H4TsuVpL894sPoVEsBQ), which is a measure of how similar two sets are.
[Link to Micha's Answer](https://github.com/CSCI-4830-002-2014/challenge-week-12/tree/master/examples/reddit)

## Challenge 6-10

Let's think a little bit about how data can be bias (and thus your results too!)

Consider the scenario where we find out that the data we just analyzed only
showed comments that received 10 upvotes or more: 

* How would the above analysis be effected?  
* Would your conclusions change?

Speculate further on biases in this data by answering the following questions.

* In what oways might our answer to Challenge 5 be biased?
* What other biases may exist in this data set? [List as many as you can think of]
* How might you prove that one of these biases exists? [Choose one from above and explain how you'd prove it]





