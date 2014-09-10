---
layout: challenge
group: challenge
id: 3
---

# Units

This week's learning challenge has TWO units.

{% for unit_key in site.data.challenges[3].units %}

{% assign unit = site.data.units[unit_key] %}

| [{{ unit.name }}]({{ unit.url }}) | 

{% endfor %}

# Show and Tell

Find an interesting data visulization about politics. Be ready to tell the class why it is interesting.

# Grading

This week's learning challenge is worth 100 points.

| API 1 | 56 points |
| Splunk 3 | 40 points |
| Show & Tell | 4 points |

# Submission

The link to the repository is: [https://github.com/CSCI-4830-002-2014/challenge-week-3](https://github.com/CSCI-4830-002-2014/challenge-week-3)