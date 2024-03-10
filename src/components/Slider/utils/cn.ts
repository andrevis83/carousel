import clsx from "clsx";

/**
 * Creates a space-separated list of class names.
 * @param className - an array of class names
 */
export default function cn(
  className: string[]
): string {
  return clsx(className);
}
