import React from "react";
import Requirement from "./Requirement";
const Requirements = ({ long, number, special, capital, small}) => (
  <section className="strength-meter">
    <h2>Password Requirements</h2>
    <Requirement
      htmlFor="password"
      isvalid={long}
      invalidMessage="We like long passwords, at least 8 characters if you could"
      validMessage="Sweet, that's long enough for us!"
    />
    <Requirement
      htmlFor="password"
      isvalid={(number, special, capital, small)}
      invalidMessage="Make it tricky to guess, adding a number, capital & small letter and special chracter makes it more secure"
      validMessage="Nice, now you're safer than the Joe"
    />
  </section>
);
export default Requirements;