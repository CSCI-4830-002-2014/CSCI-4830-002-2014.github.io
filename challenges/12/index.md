---
layout: challenge
group: challenge
id: 12
---

The challenges are fairly short for this week so please use that extra time to get started on your projects.  Your first milestone will be due by mid next week and the second one after Thanksgiving break.  Those repos will be posted soon and if you're hoping not to work over break, get started sooner rather than later!  When we get back from break we'll be going full on into installation in the lobby space.

This week is a preparation for our upcoming hackathon which will be hosted by [Micha Gorelick](http://micha.gd)

# Units

 {% for unit_key in site.data.challenges[12].units %}
 
  {% assign unit = site.data.units[unit_key] %}
  
  | [{{ unit.name }}]({{ unit.url }}) |
  
   {% endfor %}

# Show and Tell

No show and tell this week (we'll be busy!)

# Grading 

This assignment is worth 100 points.

# Submission

The [link to this week's submission repo](https://github.com/CSCI-4830-002-2014/challenge-week-12)
