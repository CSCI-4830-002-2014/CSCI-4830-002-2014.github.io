---
layout: challenge
group: challenge
id: 9
---

# Units

This week's learning challenge has TWO unit.

{% for unit_key in site.data.challenges[9].units %}

{% assign unit = site.data.units[unit_key] %}

| [{{ unit.name }}]({{ unit.url }}) | 

{% endfor %}

# Show and Tell

Find an interesting article discussing the use of machine learning in dealing with big data. Think of how you may apply the machine learning technique mentioned in this article to another interesting problem. Be creative!

# Grading

This week's learning challenge is worth 100 points.

| MongoDB II | TBD points |
| D3 IV  | TBD points |
| Show & Tell |  TBD points |

# Submission

The link to the repository is: [https://github.com/CSCI-4830-002-2014/challenge-week-9](https://github.com/CSCI-4830-002-2014/challenge-week-9)


