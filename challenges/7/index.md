---
layout: challenge
group: challenge
id: 7
---

# Units

This week's learning challenge has ONE unit.

{% for unit_key in site.data.challenges[7].units %}

{% assign unit = site.data.units[unit_key] %}

| [{{ unit.name }}]({{ unit.url }}) | 

{% endfor %}

# Show and Tell

Find an interesting use of data to solve a social problem such as homelessness or public health. Some places you can start are datakind.org, dssg.uchicago.edu/projects, and dssg.uchicago.edu/kddworkshop. Explain why you found the project interesting.

# Grading

This week's learning challenge is worth 100 points.

| GDELT 1  | 90 points |
| Show & Tell | 10 points |

# Submission

The link to the repository is: [https://github.com/CSCI-4830-002-2014/challenge-week-7](https://github.com/CSCI-4830-002-2014/challenge-week-7)
