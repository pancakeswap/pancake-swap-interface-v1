const CACHE_KEY = 'IS_DARK'

export function getThemeCache(): boolean | null {
  let cache = null
  try {
    cache = localStorage.getItem(CACHE_KEY)
    cache !== null && (cache = JSON.parse(cache))
  } catch (error) {}

  return cache
}

export function setThemeCache(isDark: boolean) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(isDark))
  } catch (error) {}
}
