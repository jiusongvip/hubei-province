import { brotliCompressSync, constants } from "node:zlib";
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const dist = new URL("../dist", import.meta.url).pathname.replace(/^\/(\w:)/, "$1");
const q11 = {
  params: {
    [constants.BROTLI_PARAM_QUALITY]: 11,
    [constants.BROTLI_PARAM_SIZE_HINT]: 0,
  },
};

let files = 0;
let saved = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const fp = join(dir, name);
    const st = statSync(fp);
    if (st.isDirectory()) {
      walk(fp);
    } else if (/\.(html|xml)$/.test(name) && !/\.(br|gz)$/.test(name)) {
      const buf = readFileSync(fp);
      q11.params[constants.BROTLI_PARAM_SIZE_HINT] = buf.length;
      const br = brotliCompressSync(buf, q11);
      if (br.length < buf.length) {
        writeFileSync(fp + ".br", br);
        files++;
        saved += buf.length - br.length;
      }
    }
  }
}

walk(dist);
console.log(`[precompress] ${files} .br sidecars written, saved ${(saved / 1024).toFixed(0)} KB raw-vs-br`);
