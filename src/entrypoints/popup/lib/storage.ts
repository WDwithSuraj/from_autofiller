import { profileStorageKey } from '@/shared/constants/storage-keys';
import type { Profile } from '@/shared/types/profile';

export async function getStoredProfile(): Promise<Profile | null> {
  const result = await browser.storage.local.get(profileStorageKey);
  return (result[profileStorageKey] as Profile | undefined) ?? null;
}
