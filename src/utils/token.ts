const TOKEN_KEY = "Taoister";

const getToken = (): string | null => localStorage.getItem(TOKEN_KEY);

const setToken = (token: string): void =>
  localStorage.setItem(TOKEN_KEY, token);

const clearToken = (): void => localStorage.removeItem(TOKEN_KEY);

export { getToken, setToken, clearToken };
