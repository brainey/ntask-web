import TinyEmitter from "tiny-emitter";
import request from "browser-request";

class NTask extends TinyEmitter {
  constructor() {
    super();
    this.request = request;
    if (process.env.USE_HTTP) {
      this.URL = "http://localhost:3000";
    } else {
      this.URL = "https://localhost:3000";
    }
  }
}

module.exports = NTask;
