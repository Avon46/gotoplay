const VOTER_KEY_STORAGE_NAME = 'game_voting_voter_key'

export function getOrCreateVoterKey(): string {
  const existingKey = localStorage.getItem(
    VOTER_KEY_STORAGE_NAME,
  )

  if (existingKey) {
    return existingKey
  }

  const newKey = crypto.randomUUID()

  localStorage.setItem(
    VOTER_KEY_STORAGE_NAME,
    newKey,
  )

  return newKey
}