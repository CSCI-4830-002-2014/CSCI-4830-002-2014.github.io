---
layout: challenge
group: challenge
id: 8
---

# Units

This week's learning challenge has TWO unit.

{% for unit_key in site.data.challenges[8].units %}

{% assign unit = site.data.units[unit_key] %}

| [{{ unit.name }}]({{ unit.url }}) | 

{% endfor %}

# Show and Tell

Find an interesting public display of big data visualization. Explain the motivation and the intended audience.

# Grading

This week's learning challenge is worth 100 points.

| Machine Learning I | 15 points |
| D3 III  | 80 points |
| Show & Tell |  5 points |

# Submission

The link to the repository is: [https://github.com/CSCI-4830-002-2014/challenge-week-8](https://github.com/CSCI-4830-002-2014/challenge-week-8)

