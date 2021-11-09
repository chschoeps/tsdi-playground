import { component, external, inject, TSDI } from "tsdi";
import CountStore from "./count-store";

@external
export default class CountSetter {
     @inject private countStore!: CountStore;

     public set = (newCount: number) => {
         this.countStore.setCount(newCount);
     }
}