---
layout: challenge
group: challenge
id: 10
---

# Units

This week's learning challenge has THREE unit.

{% for unit_key in site.data.challenges[10].units %}

{% assign unit = site.data.units[unit_key] %}

| [{{ unit.name }}]({{ unit.url }}) | 

{% endfor %}

# Show and Tell

Find an interesting D3 visualization and read through the code. In the beginning of the semester, you probably had no idea how the code works. Now, you may understand a good portion of the code. What do you still not understand? Write down TWO D3 features you'd like to learn next.

# Grading

This week's learning challenge is worth 100 points.

| MongoDB III | 29 points |
| D3 V  | 45 points |
| ML II  | 20 points |
| Show & Tell |  6 points |

# Submission

The link to the repository is: [https://github.com/CSCI-4830-002-2014/challenge-week-10](https://github.com/CSCI-4830-002-2014/challenge-week-10)


