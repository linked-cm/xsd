/**
 * Minimal shim for backward compatibility.
 * XSDDate was removed because @_linked/core queries return native JS dates,
 * making a literal-wrapping Shape unnecessary. This shim provides the static
 * utility methods so unmigrated packages (e.g. irlcg) can still import them.
 */
export class XSDDate {
  static toNativeDate(
    literal: { value?: string } | string | null
  ): Date | null {
    if (!literal) return null;
    const value = typeof literal === 'string' ? literal : literal.value;
    return value ? new Date(value) : null;
  }

  static fromNativeDate(
    nativeDate: Date
  ): { node: string; value: string } | null {
    if (!nativeDate) return null;
    const value = nativeDate.toISOString();
    return { node: value, value };
  }

  static fromTimestamp(timestamp: string | number) {
    const native = new Date(
      typeof timestamp === 'string' ? parseInt(timestamp) : timestamp
    );
    return this.fromNativeDate(native);
  }
}
