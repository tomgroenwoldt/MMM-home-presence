# MMM Home presence
![module_demo](https://i.ibb.co/b1xSm5r/home-presence.png)

This module pings configurable IP addresses and checks their reachability. This way you can check if certain
devices are connected to your local network and draw a conclusion about their owners being at home or outside.

**You should setup fixed IP addresses for the devices you want to monitor. This can be done in your
router settings.**

### Installation
In your terminal, go to your MagicMirror's Module folder:
```
cd ~/MagicMirror/modules
```

Clone this repository:
```
git clone https://github.com/tomgroenwoldt/MMM-home-presence.git
```

Install dependencies:
```
cd MMM-home-presence
npm install
```
### Using the module
Configure the module in your `config/config.js` file. Example:
```
{
  module: "MMM-home-presence",
  position: "top_right",
  header: "Home Presence",
  config: {
    IPMap: {
      "192.168.178.110": "Einstein",
      "192.168.178.28": "Guenther",
      "192.168.178.55": "Manfred"
    },
    interval_ms: 2000,
  }
}
```
