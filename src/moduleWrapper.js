// moduleWrapper.js

import module from './cpp/module.js';

const ModuleWrapper = {
    addNumbers: module.cwrap('addNumbers', 'number', ['number', 'number']),
};

export default ModuleWrapper;
