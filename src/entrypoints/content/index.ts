import { placeholderContentScriptMatches } from '@/shared/constants/content-script-matches';
import { messageTypes } from '@/shared/constants/message-types';

export default defineContentScript({
  matches: placeholderContentScriptMatches,
  main() {
    console.info(`${messageTypes.autofillRequest} scaffold ready`);
  },
});
