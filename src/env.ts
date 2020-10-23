/**
 * Imports
 */
import env from 'env-var';

/**
 * Exports
 */
export const FOO = env.get('FOO').required().asString();
