import { component, external, inject, TSDI } from "tsdi";
import CountStore from "./count-store";

@external
export default class CountDisplay {
     @inject private countStore!: CountStore;

     public show = () => {
         // tslint:disable-next-line:no-console
         console.log('count: ', this.countStore.getCount());
     }
}