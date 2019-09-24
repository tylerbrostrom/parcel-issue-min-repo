// Code from this module doesn’t get compiled by Babel
import { MicroModal } from "@test/uncompiled-dependencies";
MicroModal.init();

// App code successfully gets compiled by Babel
class Test {
  constructor(foo) {
    this.foo = foo;
  }
  init() {
    return this.foo;
  };
}