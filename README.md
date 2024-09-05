# demo-oom

The goal of this demo is to demonstrate how to debug Out of Memory issues.

## Setup

Follow those commands:

```
npm i
npm run start
```

Now you can retrieve data from the endpoints:

```
# output => {"result":100}
curl 'http://127.0.0.1:3000/list?size=100'
# output => {"result":200}
curl 'http://127.0.0.1:3000/list?size=100'
# output => {"result":300}
curl 'http://127.0.0.1:3000/list?size=100'

# output => {"sum":42}
curl 'http://127.0.0.1:3000/sum?a=12&b=30'

# output => {"value":"42!"}
curl 'http://127.0.0.1:3000/print?val=42'
```

## Detect OoM

Run `npm run profile` on one window (wait for `🔥  Profiling` message), then `npm run stress` on another one.
Once the `stress` command is done, stop the `profile` command (with `CTRL-C`).

You should see the message `🔥 Flamegraph generated in` and a new browser tab should be opened with a similar result to what you can see in the `./out` folder:
![OoM profiling result](./img/example.png)
