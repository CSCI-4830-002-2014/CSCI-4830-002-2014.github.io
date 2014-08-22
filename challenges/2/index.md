---
layout: challenge
group: challenge
id: 2
---

# Units

This week's learning challenge has two units:

{% for unit_key in site.data.challenges[2].units %}

{% assign unit = site.data.units[unit_key] %}

[{{ unit.name }}]({{ unit.url }})

{% endfor %}

