import 'https://unpkg.com/zone.js@0.11.4/fesm2015/zone.js';
import { registerApplication, start } from 'https://unpkg.com/single-spa@5.9.3/lib/esm/single-spa.dev.js?module';

registerApplication({
    name: 'spa-app',
    app: () => import(`./dist/single-spa-angular-unmount-issue/main.js`).then(() => window['single-spa-angular-unmount-issue']),
    activeWhen: (location) => location.hash.startsWith('#app')
});

start();
