---
layout: challenge
group: challenge
id: 1
---

The learning resources you must read for this week are:

* [Splunk - Search Tutorial](http://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/WelcometotheSearchTutorial) (Part 1 - 5)
* [D3 - Let’s Make a Bar Chart](http://bost.ocks.org/mike/bar/)
* [D3 - Let’s Make a Bar Chart, II](http://bost.ocks.org/mike/bar/)

# Splunk

## Checkpoint 1 - 10 points

This checkpoint is when you've reached the end of Part 3, which is [Get the tutorial data into Splunk](http://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/GetthetutorialdataintoSplunk). Take a screenshot of your entire desktop to submit.

## Checkpoint 2 - 10 points

This checkpoint is when you've finished the first section of Part 5, which is  [Start searching](http://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/Startsearching). Your goal is to be able to enter the query below and see some results.

<pre>
buttercupgames (error OR fail* OR severe)
</pre>

This is all you have to learn about Splunk for now. Save the rest later on. Take a screenshot of your entire desktop to submit.

# D3

## Checkpoint 3 - 10 points

This checkpoint is when you've reached the end of the article [Let’s Make a Bar Chart](http://bost.ocks.org/mike/bar/). Take a screenshot of your entire desktop like below to submit.

![checkpoint 1](checkpoint1_jsfiddle_example.png)

## Checkpoint 4 - 10 points

This checkpoint is when you've reached the end of the article [Let’s Make a Bar Chart, II](http://bost.ocks.org/mike/bar/). Again, take a screenshot of your entire desktop to submit. 

One potential stumbling block is loading data. In the example code,

{% highlight javascript %}
d3.tsv("data.tsv", function(error, data) {
{% endhighlight %}

the path to the data file _data.tsv_ must be replaced by an URL pointing to an actual file hosted somewhere by some server. You may already know how to host a data file on your own. But if you don't have a hosting solution working for you, consider the solution described next.

### Creating a data Gist

Let's learn a neat trick of using Gist to host your data online for free. Copy and paste the text below to create a Gist.

<pre>
name	value
Locke	4
Reyes	8
Ford	15
Jarrah	16
Shephard	23
Kwon	42
</pre> 

You want to be able to see something like this.  

![host data on gist](host_data_on_gist.png)

Press the "Raw" button to get the URL linking directly to this data file. 

![gist link](gist_link.png)

You can then use this URL in your D3 code to get the desired result.

![use_data_gist_in_jsfiddle](use_data_gist_in_jsfiddle.png)

## Study Questions - 10 points

Q1. What would happen if the data's heading reads differently, like below? Where in the code do you need to modify to get it to work again?

<pre>
firstname	count
Locke	4
Reyes	8
Ford	15
Jarrah	16
Shephard	23
Kwon	42</pre>

Q2. What is the point of going through so much trouble to use D3 to make a barchart?  Why don't we just use Excel? What are the benefits of using D3?

Q3. In the code below, what is the purpose of the second argument __type__?

 {% highlight javascript %}
 d3.tsv("data.tsv", type, function (error, data) ...
 {% endhighlight %}


# Challenges

###__Challenge 1:__ Load a new dataset - 10 points

This dataset is US's population and income distributions across age groups. 
The content of this dataset is stored as a Gist.
<!-- <pre>
group	population	income
Under 05	21434	8
05 to 09	20785	9
10 to 14	19893	10
15 to 19	21086	13
20 to 24	21154	16
25 to 29	21453	27
30 to 34	19632	32
35 to 39	19888	35
40 to 44	20559	36
45 to 49	22527	34
50 to 54	21860	35
55 to 59	19172	32
60 to 64	16223	30
65 to 69	12020	25
70 to 74	8936	20
75 to 79	7181	18
80 to 84	5783	17
85 and over	4693	16
</pre>
 -->
<!-- A data gist is made available for you: [Data Gist](https://gist.githubusercontent.com/doubleshow/21e3f7f9afc1383b41b3/raw/bb79556432487f3b143f5b57662d839aeb564c6f/popdist). Copy the URL and use it in your D3 code. -->

{% gist doubleshow/21e3f7f9afc1383b41b3 %}

Click on the "view raw" button to get the URL you can use in your D3 code. The desired output is shown below. 

![variation1](variation1.png)

Hint: You will need to modify every instance of _d.value_ to something else.

Save your JSFiddle work. Record the URL. Enter the URL in your submission template.

###__Challenge 2:__ Create variations - 40 points

#### a. Make each bar thinner. (5 points)

![variation6](variation6.png)

Save your JSFiddle work. Record the URL. Enter the URL in your submission template.

#### b. Make each bar thinner, but more spaced out. (5 points)

![variation2](variation4.png) 

Save your JSFiddle work. Record the URL. Enter the URL in your submission template.

#### c. Right align the text. (5 points)

![variation3](variation3.png)

Save your JSFiddle work. Record the URL. Enter the URL in your submission template.

#### d. Right align the bars. (5 points)

![variation4](variation2.png) 

Save your JSFiddle work. Record the URL. Enter the URL in your submission template.

#### e. Set the background to light blue. (5 points)

![variation5](variation5.png)

Save your JSFiddle work. Record the URL. Enter the URL in your submission template.

#### f. Display the value in the "income" column together with population. (5 points)	

![variation7](variation7.png)

Save your JSFiddle work. Record the URL. Enter the URL in your submission template.

#### g. Visualize the income column by opacity. Lower income is represented by lighter blue. (10 points)

![variation8](variation8.png)

Save your JSFiddle work. Record the URL. Enter the URL in your submission template.

Hints: 

* You will need to add this line somewhere.

{% highlight javascript %}
.attr("opacity", function(d) { return z(d.income); })
{% endhighlight %}

* You need to define a new scaling function _z_.

* You need to modify this to coerce _income_ to a number too.

{% highlight javascript %}
function type(d) {
  d.population = +d.population; // coerce to number
  return d;
}
{% endhighlight %}


# Journal 

A template has been created for you to keep a learning jounral for this week. This template is in the form of a Git repository. 

The link to the repository is: [https://github.com/CSCI-4830-002-2014/challenge-week-1](https://github.com/CSCI-4830-002-2014/challenge-week-1)

1. To start, [**fork** ][forking] the repository.
1. [**Clone**][ref-clone] the repository to your computer.
1. Modify the files and [**commit**][ref-commit] changes to complete your solution.
	* README.md is the template file. Edit your name. Enter your answers to the study questions. Enter JSFiddle links...etc.
	* The images in the folder are placeholder images. Replace them with your own screenshot images.
1. [**Push**][ref-push] the changes up to GitHub.
1. Create a [**pull request**][pull-request] on the original repository to turn in the assignment.

If you are not familair with Github enough to go through this process, please seek help. 

* Go to the TA's office hours.
* Go get help from one of the LAs.

<!-- Links -->
[create-repo]: https://help.github.com/articles/create-a-repo
[private-repos]: /guide/private_repos
[add-to-team-action]: https://github.com/education/teachers_pet/#giving-others-access
[teachers-pet]: https://github.com/education/teachers_pet
[help-add-to-team]: https://help.github.com/articles/adding-organization-members-to-a-team
[help-access-control]: https://help.github.com/articles/what-are-the-different-access-permissions#organization-accounts
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[ref-commit]: http://gitref.org/basic/#commit
[ref-push]: http://gitref.org/remotes/#push
[pull-request]: https://help.github.com/articles/creating-a-pull-request
[raw]: https://raw.githubusercontent.com/education/guide/master/docs/forks.md

<!-- After you've  -->

<!-- ## Checkpoint 3

The third checkpoint is when you've completed the section [Rotating into Columns](http://bost.ocks.org/mike/bar/3/#columns) in the article [Let’s Make a Bar Chart, III](http://bost.ocks.org/mike/bar/3/). Take a full screenshot and submit it. It should look something similar to below.

![checkpoint3](checkpoint3.png)

The data you need for this article is provided below for your convenience. You will need to create a text file containing this data and host it somewhere (e.g., Gist), like in the previous checkpoint. 

<pre>
name	value
A	.08167
B	.01492
C	.02782
D	.04253
E	.12702
F	.02288
G	.02015
H	.06094
I	.06966
J	.00153
K	.00772
L	.04025
M	.02406
N	.06749
O	.07507
P	.01929
Q	.00095
R	.05987
S	.06327
T	.09056
U	.02758
V	.00978
W	.02360
X	.00150
Y	.01974
Z	.00074
</pre>

## Checkpoint 4

The fourth checkpoint is when you've reached the end of the article [Let’s Make a Bar Chart, III](http://bost.ocks.org/mike/bar/3/). Take a full screenshot and submit it. It should look something similar to below.

![checkpoint4](checkpoint4.png) -->


<!-- ## Challenges

__Challenge 1:__ Make the chart smaller. Enlarge the text. Reduce the number of ticks. Change the color of the bars to red. The result should look like below.

 ![challenge1](challenge1.png)

__Challenge 2:__ 

{% highlight javascript %}
var max = d3.max(data, function (d) {
        return d.value;
});
{% endhighlight %}
and

{% highlight javascript %}
.attr("opacity", function(d) { return d.value / max });
{% endhighlight %}


![challenge2](challenge2.png)
 -->




