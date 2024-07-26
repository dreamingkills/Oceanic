import Compression from "./base";
import type Shard from "../Shard";
import fzstd from "fzstd";

export default class ZstdCompression extends Compression {
    _resolvePromise?: (data: Uint8Array) => void;
    _resultPromise?: Promise<Uint8Array>;
    stream: fzstd.Decompress;
    constructor(shard: Shard) {
        super(shard);
        this.stream = new fzstd.Decompress(data => {
            this._resolvePromise!(data);
        });
    }

    async decompress(data: Buffer): Promise<Buffer> {
        if (this._resultPromise) {
            await this._resultPromise;
        }
        this._resultPromise = new Promise(resolve => {
            this._resolvePromise = resolve;
        });
        this.stream.push(data);
        const result = await this._resultPromise;
        return Buffer.from(result);
    }
}
