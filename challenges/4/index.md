---
layout: challenge
group: challenge
id: 4
---

# Units

This week's learning challenge has TWO units.

{% for unit_key in site.data.challenges[4].units %}

{% assign unit = site.data.units[unit_key] %}

| [{{ unit.name }}]({{ unit.url }}) | 

{% endfor %}

# Show and Tell

Find an interesting data visulization about politics. Be ready to tell the class why it is interesting.

# Grading

This week's learning challenge is worth 100 points.

| API 2 | 36 points |
| Refine | 58 points |
| Show & Tell | 6 points |

# Submission

The link to the repository is: [https://github.com/CSCI-4830-002-2014/challenge-week-4](https://github.com/CSCI-4830-002-2014/challenge-week-4)