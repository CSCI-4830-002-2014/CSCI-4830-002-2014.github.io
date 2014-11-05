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

Find an interesting D3 visualization and read through the code. In the beginning of the semester, you probably had no idea how the code works. Now, you may understand a good portion of the code. What do you still not understand? Write down TWO D3 features you'd like to learn next.

# Grading

This week's learning challenge is worth 100 points.

| Graph Database I | TBD points|
| D3 VI  | TBD points |
| ML III  | TBD points |
| Show & Tell |  TBD points |

# Submission

The link to the repository is: [https://github.com/CSCI-4830-002-2014/challenge-week-11](https://github.com/CSCI-4830-002-2014/challenge-week-11)



