// Registers every shape this package defines. Side-effect imports only: a
// consumer (or the host app) can load this one module to get the full set of
// shapes registered, without pulling in components, providers or other exports.
import '../ontologies/xsd.register.js';

import './Boolean.js';
