import { component, destroy, initialize, TSDI } from 'tsdi';

const tsdi = new TSDI();

tsdi.enableComponentScanner();

@component
export default class CountStore {
    private count: number;

    constructor() {
        this.count = 0;
    }

    setCount(newCount: number) {
        this.count = newCount;
    }

    getCount() {
        return this.count;
    }

    @initialize
    protected init(): void {
        // tslint:disable-next-line:no-console
        console.log('init');
    }

    @destroy
    public destroy(): void {
        // tslint:disable-next-line:no-console
        console.log('destroy');
    }
}

