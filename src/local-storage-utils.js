export const TOKEN = 'TOKEN';

export function getTokenFromLocalStorage() {
    const token = localStorage.getItem(TOKEN);
    
    if (token) return JSON.parse(token);

    return '';
}

export function putTokenInLocalStorage(token) {
    localStorage.setItem(TOKEN, JSON.stringify(token));
}