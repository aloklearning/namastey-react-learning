export const hasValidImageExtension = (fileName) => {
    const regex = /\.(jpg|JPG|png|JPEG)$/i;
    return regex.test(fileName);
}