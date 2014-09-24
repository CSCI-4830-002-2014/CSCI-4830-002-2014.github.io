---
layout: challenge
group: challenge
id: 5
---

# Units

This week's learning challenge has TWO units.

{% for unit_key in site.data.challenges[5].units %}

{% assign unit = site.data.units[unit_key] %}

| [{{ unit.name }}]({{ unit.url }}) | 

{% endfor %}

# Show and Tell

Find an interesting visualization that involves a map. Be ready to discuss the content and your opinions on it.

# Grading

This week's learning challenge is worth 100 points.

| Tableau 1  | 71 points |
| Analysis 1 | 21 points |
| Show & Tell | 8 points |

# Submission

The link to the repository is: [https://github.com/CSCI-4830-002-2014/challenge-week-5](https://github.com/CSCI-4830-002-2014/challenge-week-5)
