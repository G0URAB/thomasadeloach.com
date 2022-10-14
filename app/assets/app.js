/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';
import '@fortawesome/fontawesome-free/css/all.css'

// start the Stimulus application
import './bootstrap';

import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './components/App'
import router from './routes'

const app = createApp(App).use(router);
app.mount('#app')
