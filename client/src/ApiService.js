export const getGreeting = async () => {
    const response = await fetch('/api/greeting');
    return await response.json();
}
