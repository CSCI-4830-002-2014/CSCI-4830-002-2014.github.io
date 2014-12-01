---
layout: hackathon
group: hackathon
id: zayo
---

# Timeline

| 5:15 – 5:25 | Overview of Zayo & Business Case for Big Data - Presented by Jason Tibbs, VP ISP, Big Data |
| 5:25 – 5:30 | Short Q&A |
| 5:30 – 5:35 | Presentation of the Business Case for Hackathon |
| 5:35 – 6:35 | Hackathon Working Session part 1 |
| 6:35 – 6:45 | Break for food |
| 6:45 – 7:45 | Hackathon Working Session part 2 |
| 7:45 – 8:05 | Presentations |
| 8:05 – 8:15 | Judging & Awards Presentation |

# Dataset

Zayo Building Dataset

| [XLSX](zayo.xlsx) | Data obtained from Zayo in the Excel format. These are buildings Zayo alrady has installations and active operations. |
| [CSV](zayo.csv) | Same data in CSV format, with field names slighty modified |
| [JSON](zayo.json) | Transformed from CSV and ready to import into a mongodb server|

# Repository

| [https://github.com/CSCI-4830-002-2014/hackathon-zayo](https://github.com/CSCI-4830-002-2014/hackathon-zayo) 

# Objectives

Identify new business opporunities for Zayo 

* Listen to Zayo's business case
* Use any tool you've learned this semester (MongoDB, D3, Tableau)
* Create a report with your analyses with visualizations
* Give presentation to the class and Zayo representatives.

# Ideas

* Use Yelp dataset to see if there are buildings nearby Zayo's current operations in a given market

# Team

The class will be divided into four teams. Team assignment will be facilitated by the teaching staff.

# Data Access

We have hosted a MongoDB server on MongoLab, to make it easy for your team to get started.

Connnect to this server via shell:

	mongo ds051990.mongolab.com:51990/zayo -u zayo -p zayo1201

Run a test query

	rs-ds051990:PRIMARY> db.buildings.findOne()
	{
		"_id" : ObjectId("547c67aab0a49f44fe42c1bb"),
		"market" : "Charlottesville, VA",
		"address" : "212 7th St NE",
		"floor" : "2nd Floor",
		"city" : "Charlottesville",
		"state" : "VA",
		"postal" : "22902",
		"status" : "Fiber Only",
		"type" : "Office",
		"code" : {
			"LATA" : "928",
			"CLLI" : "CHVLVALB",
			"SWCLLI" : "CHVLVAXA"
		},
		"loc" : {
			"type" : "Point",
			"coordinates" : [
				-78.4766473,
				38.030224
			]
		},
		"coordinate" : {
			"v" : 5918.1,
			"h" : 1680.5
		}
	}


