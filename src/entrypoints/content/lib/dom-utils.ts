export function isFormField(element: Element): boolean {
  return ['INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName);
}
