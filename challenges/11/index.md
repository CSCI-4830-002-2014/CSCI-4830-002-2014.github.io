---
layout: challenge
group: challenge
id: 11
---

# Units

This week's learning challenge has FOUR unit. Don't panic! Each unit is relatively small.

{% for unit_key in site.data.challenges[11].units %}

{% assign unit = site.data.units[unit_key] %}

| [{{ unit.name }}]({{ unit.url }}) | 

{% endfor %}

# Show and Tell

No show and tell homework this week!

# Grading

This week's learning challenge is worth 100 points.

| Graph Database I | 15 points|
| MongoDB III | 20 points |
| ML III  | 30 points |
| D3 VI  | 35 points |

# Submission

The link to the repository is: [https://github.com/CSCI-4830-002-2014/challenge-week-11](https://github.com/CSCI-4830-002-2014/challenge-week-11)



