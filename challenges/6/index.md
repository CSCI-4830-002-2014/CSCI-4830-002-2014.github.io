---
layout: challenge
group: challenge
id: 6
---

# Units

This week's learning challenge has TWO units.

{% for unit_key in site.data.challenges[6].units %}

{% assign unit = site.data.units[unit_key] %}

| [{{ unit.name }}]({{ unit.url }}) | 

{% endfor %}

# Show and Tell

Find an article comparing NoSQL and SQL. Be ready to discuss the pros and cons of the two database.

# Grading

This week's learning challenge is worth 100 points.

| Tableau 2  | 47 points |
| MongoDB 1  | 44 points |
| Show & Tell | 9 points |

# Submission

The link to the repository is: [https://github.com/CSCI-4830-002-2014/challenge-week-6](https://github.com/CSCI-4830-002-2014/challenge-week-6)

