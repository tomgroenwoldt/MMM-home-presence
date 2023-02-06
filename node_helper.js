const NodeHelper = require("node_helper");
const ping = require("ping");

module.exports = NodeHelper.create({
  discover: function(presence, interval_ms) {
    const self = this;
    setInterval(function() {
      for (const ip in presence) {
        ping.promise.probe(ip)
          .then(function(res) {
            if (res.alive) {
              presence[ip] = true;
            } else {
              presence[ip] = false;
            }
          });
      }
      self.sendSocketNotification("PRESENCE_UPDATE", presence);
    }, interval_ms);
  },
  socketNotificationReceived: function(notification, payload) {
    if (notification === "CONFIG") {
      this.discover(payload.presence, payload.interval_ms);
    };
  }
});
