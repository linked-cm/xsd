/**
 * Minimal shim for backward compatibility.
 * XSDDate was removed because @_linked/core queries return native JS dates,
 * making a literal-wrapping Shape unnecessary. This shim provides the static
 * utility methods so unmigrated packages (e.g. irlcg) can still import them.
 */
export declare class XSDDate {
    static toNativeDate(literal: {
        value?: string;
    } | string | null): Date | null;
    static fromNativeDate(nativeDate: Date): {
        node: string;
        value: string;
    } | null;
    static fromTimestamp(timestamp: string | number): {
        node: string;
        value: string;
    };
}
