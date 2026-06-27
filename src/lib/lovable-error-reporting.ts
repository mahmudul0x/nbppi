export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  console.error("[NBPPI Error]", error, context);
}
