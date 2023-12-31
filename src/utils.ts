export const formatDate = (inputDateStr: string, showTime: boolean) => {
    const date = new Date(inputDateStr);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedTime = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

    if (showTime) {
        return `${day}.${month}.${year}. ${formattedTime}`;
    }
    return `${day}.${month}.${year}.`;
};
