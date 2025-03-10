import { Plugin } from 'plugify';
// import { * as s2 } from ":s2sdk" // sdk is name of plugin to import from as synthetic module

export class ExamplePlugin extends Plugin {
    pluginStart() {
        console.log('ExamplePlugin::pluginStart');
    }
    //pluginUpdate(dt) {
    //    console.log('ExamplePlugin::pluginUpdate');
    //}
    pluginEnd() {
        console.log('ExamplePlugin::pluginEnd');
    }
}

export function makePrint(count, message) {
    for (let i = 0; i < count; i++) {
        console.log(message);
    }
}