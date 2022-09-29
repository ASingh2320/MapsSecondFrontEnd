# MapsSecondFrontEnd
## Running on Windows (rough runthrough)
### In same folder:
> * `git clone https://github.com/ASingh2320/MapsSecondFrontEnd.git` or `git clone git@github.com:ASingh2320/MapsSecondFrontEnd.git`
> * `git clone https://github.com/ASingh2320/sbubackend.git` or `git clone git@github.com:ASingh2320/sbubackend.git`

> * Install https://nodejs.org/en/download/ 
> * `npm install`
> * `npm install --global expo --force` and `npm install --global yarn --force`
> * Search: Edit the system environment variables -> System Properties -> Advanced -> Environment Variables -> Edit Path -> Add: `C:\Users\[USERNAME]\AppData\Roaming\npm`

### In sbubackend:
> `npm run dev`

### In MapsSecondFrontEnd:
> `npm start`

> http://localhost:19002/


### Possible errors:
___
Execution policy may need to be changed to run scripts: ("...cannot be loaded because the execution of scripts is disabled on this system")
> * Run Powershell as administrator
> * `Set-ExecutionPolicy RemoteSigned`
> * If you wish, you can set the policy back to default with `Set-ExecutionPolicy Restricted`

 
> MapsSecondFrontEnd -> metro.config.js -> Change line 2 from `const { getDefaultConfig } = require('exp');` to `const { getDefaultConfig } = require('expo/metro-config');`
