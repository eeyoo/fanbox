# Fanbox

## Installation

```
git clone https://github.com/joereynolds/fanbox
cd fanbox/app
sudo npm install electron-prebuilt -g
sudo npm install
```

## Running the app
```
electron main.js
```

## Example
![alt-text](fanbox.gif)

## Fanbox

Fanbox is a desktop dashboard (like conky) built on HTML, CSS, and Javascript.
Fanbox is created and styled with HTML and CSS so anyone comfortable with those two things should feel right at home with fanbox. 

There are no made-up tags or any scripts to adjust, just HTML.

## Getting started

See the [getting started](docs/getting-started.md) guide for a complete run through of creating a theme.

## Examples

Here are a few examples of what Fanbox comes with out of the box

###
```
<!-- Shows a gauge bar of RAM usage-->
<main>
  <div class="memory">
    <div class="value" data-format="chart-gauge"></div>
  </div>
</main>
```
### Execute raw shell commands

Fanbox doesn't come with everything under the sun, if it's missing something you need, you can add it in yourself with some shell-fu!

Just give a tag the ```raw-command``` class and inject your command into ```data-command``` like so

```
<div class="raw-command" data-command="ls -l"></div>
```

This be can be further expanded to provide actual useful information like battery level and volume level.

```
<!-- Shows battery level in percentage -->
<span class="raw-command" data-command="upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep percentage | awk '{print $2}'"></span>
```

```
<!-- Shows volume level in percentage -->
<span class="raw-command" data-command='exec pactl list sinks | grep "Volume: 0" | cut -d " " -f4 | sed -n 2p'></span>
```
