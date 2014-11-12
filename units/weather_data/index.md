---
layout: unit
group: challenge
id: weather_data
---

This is going to be a preparation for our upcoming hackathon which will work with Yelp and weather data.  We are providing the weather data below.  If you need a refresher on using the Yelp data - go back to our [yelp hackathon](https://csci-4830-002-2014.github.io/hackathons/yelp/)

# Challenges

(Challenge 2 is worth 10 points, but all the rest are worth 8)

## Challenge 1

Download the Weather Data and put it into Mongo

[Find the data at this link](https://github.com/CSCI-4830-002-2014/challenge-week-12/tree/master/data)

Now write a query that returns the total precipitation for April 25, 2010 in Madison, WI.

Submit the query and the resulting answer.

## Challenge 2

Write a query to find what the average wind speed was on the same day (4/25/2010) in Las Vegas.

Submit the query and the answer

## Challenges 3-6 

Now let's switch contexts.  Go to your Yelp data collection (re-download it if you have to)

Answer the following questions:
 
* How many reviews are from Madison?
* How many reviews are from Las Vegas?
* How many reviews are from Phoenix?

Submit your query and answer for each of these questions

## Challenge 7 [OPTIONAL] (10 bonus points)

If you're feeling ambitious and want to learn a little bit about Natural Language Processing, try to answer the following question:

* What are the 5 most used 2-gram during this period?

HINT: N-grams chunk up sentences into groups of N words.  So, for example, if we are looking
at the 2-grams of the sentence 'hello how are you', we would be
analyzing the tuples (hello, how), (how, are), (are, you).  This makes
it so that any analysis we would have done with the singular words are
now pegged to the context in which the words are used.

You can use [this JavaScript Library](https://github.com/NaturalNode/natural) to complete this.  

Submit your code and answer.

## Micha's Solutions


If you're interested in seeing Micha's solutions to these questions, [go here](https://github.com/CSCI-4830-002-2014/challenge-week-12/tree/master/examples/dataprep)

He uses a different code base than we've been teaching, but his methods may be helpful. Also, DO NOT submit his code for your sample queries!!  You will not receive points