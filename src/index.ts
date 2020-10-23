import dotenv from 'dotenv';
dotenv.config();

import './resolve-module-aliases';
import * as env from '~/env';
import { foo } from '~/foo';

console.log('Hello world!', { foo, FOO: env.FOO });
