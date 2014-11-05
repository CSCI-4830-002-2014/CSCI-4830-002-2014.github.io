---
layout: unit
group: challenge
id: mongodb_4
---

This week's MongoDB learning challenge is to import __huMONGOus__ amount of data in to MongoDB database. You will surely go over MongoLab's free tier quota. Thus, you will need to do this challenge using a MongoDB database running on your own machine.


# Challenges

## Challenge 1

We have been working on the Yelp dataset. But we have skipped the __reviews__ data because of its size. Your first challenge is to get the __reviews__ data into your MongoDB server. Run __count()__ to prove that you've got all the reviews in a collection. 

Devise a simple query and see the result. Take a screenshot to submit.

## Challenge 2

Read this [article](http://sdqali.in/blog/2014/08/02/importing-the-yelp-dataset-into-mongo/) about importing the Yelp dataset into MongoDB. As it turns out, MongoDB has a specific requirement for how to represent geo-spatial data, based on the (GeoJSON Format Specification)[http://geojson.org/geojson-spec.html]. This article teaches you how to make the conversion so that the "location" field can be subject to Mongo's geo-spatial queries. The example is in Ruby. You may follow the example as is (if you are familair with Ruby), or re-implement the logic in your favoirte scripting language (e.g., Python, NodeJS).

Recreate the "business" collection by adding a new "location" field that conforms to Mongo's specification.Devise a geo-spatial query and see the result. Take a screenshot to demonstrate you got it to work and submit.

## Challenge 3

| [TIST Quantification Dataset](https://drive.google.com/file/d/0B3vCLsDNSSvTX0h6c2s2bzZmTjg/view?usp=sharing) |

[TIST](http://tist.org/i2/) is a non-profit organization with a mission to "empowers Small Groups of subsistence farmers ... to reverse the devastating effects of deforestation, drought, and famine." TIST provides monetary incentives to farmers to plant trees and raises funds by selling the greenhouse gas credits (GhG) earned through the tree planting effort. One key to TIST effort is to send workers to farms to quantify the tree growth activities, namely, counting trees.

This dataset contains 500K+ records of the "quantification efforts" carried out by workers. It is currently in CSV format. There are 10 fields in each row. The fields are

1. visit id
2. country
3. cluster id
4. location id
5. location name
6. location kind
7. latitude
8. longitude
9. quantifier id
10. quantifier initial

Before importing, first write a script to covert each row into a JSON object.

For example, given a row

	1,IN,10,8,Munusamy,Tree,12.6907000000,79.3963000000,239,DHAN

conver it to

{% highlight json %}

	{"visit_id" : 1,
     "contry" : "IN",
     "cluster_id" : 10,
     "location" : {"id": 8,
     			   "name" : "Munusamy",
     			   "kind" : "Tree",
     			   "type" : "Point",
     			   "coordinates" : [12.6907000000,79.3963000000]
     			   },
     "quantifier" : {"id": 239,
                     "initial" : "DHAN"}
    }
{% endhighlight %}

Note that you want to produce an array of this type of JSON object. Save the output to a text file, for example, _tist.json_. Run mongoimport with the right arguments to import this json array.

Run count() to show that you've successfully imported all the data. Run findOne() to show that the documents are stored in the right JSON format. Run a query you come up with to show that you can get some result.


## Challenge 4

| [eBird Small (1K records)](https://drive.google.com/open?id=0B3vCLsDNSSvTeUpzTndpU1U2NUE&authuser=0)| Use this for development and debugging |
| [eBird Large (1M records)](https://drive.google.com/open?id=0B3vCLsDNSSvTMFZyMTYtcDgyUm8&authuser=0)| Use this for after your script is working |

[eBird](http://ebird.org/) is one of the largest online citizen science endeavor that invites people from all over the world to report presence or absence of species, as well as bird abundance.

Similar to the previous challenge, you need to first convert each row to a JSON object and produce a text file containing an array of JSON object. The original format is in TSV. You need to come up with your own way to represent a row as a JSON object with nested objects whenever appropriate. Note that in the TSV format, the schema is fixed with 42 fields. Many fields have missing values. For example, a lot of rows have no IBA CODE. When you covert data into JSON objects, you can simply skip the fields without a value. This is the advantage of not requiring a fixed schema.

You should first work with the smaller dataset (1k) to test your conversion script. Once you are confident your script does the right thing, execute it on the large dataset (1M).

Run count() to show that you've successfully imported all the data. Come up with TWO interesting quries and show your results.

