import CountDisplay from "./count-display";
import CountSetter from "./count-set";

console.log('start');

const cd = new CountDisplay;
const cs = new CountSetter;

  
cs.set(42);

cd.show();