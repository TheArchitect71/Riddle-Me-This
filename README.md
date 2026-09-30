# Riddle Me This

Angular22 migration of the existing six-outcome hero/villain quiz. Quiz content and bundled backgrounds remain unchanged. Replaying now clears scores; stale answers from the other morality branch no longer affect results. Direct result navigation without answers no longer crashes.

## Run

```sh
nvm use
npm ci
npm start
```

Foreground http://127.0.0.1:4200; Ctrl+C to stop. Assets are bundled; no remote fonts or services. Production hosts must serve index.html for Angular routes.

## Validate

`npm run build`, `npm run typecheck`, `npm test -- --browsers=ChromeHeadless`, `npm audit`. Set CHROME_BIN if Chrome is outside /Applications.

Angular/core/CLI/build22.2.0, Bootstrap5.3.8/Popper2.11.8, Node26.10.0, RxJS7.8.2/Zone0.16.3. TS6.0.3 held by Angular>=6<6.1; Jasmine6.3/types6 held because Jasmine7 read-only globals fail with zone-testing0.16.3. Nativebuilder and eager modulecomponents/Zoneprovider preserve routing/forms. ObsoleteAngularHTTP/compilerprivateimport/jQuery/oldtooling removed. [Official Angular compatibility](https://angular.dev/reference/versions).

SevenChromium tests pass, including sixoutcomes/idempotentscoring/branchisolation/replay/reset. ProductionPlaywrightdesktop1280x800/mobile390x844 passed all six outcomes (Superman,Batman,WonderWoman,LexLuther,Joker,Cheetah), replay, emptyresultnavigation, nohorizontaloverflow/runtimeerrors/externalrequests. Home layout now scales to phones while retaining background/title/startbutton. Browserplugin absent; existingPlaywright/Chromium148 fallback. Evidence/source snapshots outside repo in Codex/mission folders. Other browsers untested; originaltiefirst-index/emptyanswerdefault behavior retained.
