import { Shape } from '@_linked/core/shapes/Shape';
import type { NodeReferenceValue } from '@_linked/core/utils/NodeReference';
export declare class Boolean extends Shape {
    static targetClass: NodeReferenceValue;
    static true(): boolean;
    static false(): boolean;
    static toLiteral(value: boolean): boolean;
    static isTrue(value: boolean | string | {
        value?: string;
    }): boolean;
    static isFalse(value: boolean | string | {
        value?: string;
    }): boolean;
    /**
     * Updates a boolean value of the given node with the opposite of its current boolean value.
     * Will be set to true if not set yet.
     * @param resource
     * @param property
     */
    static negate(_resource: NodeReferenceValue | Boolean, _property: unknown): void;
}
