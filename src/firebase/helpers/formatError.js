export const formatError = (errorMessage) => {
    const messageContent = errorMessage.split('/')[1].split('-').join(' ').replace(")", "");
    const userFriendlyMessage = messageContent.charAt(0).toUpperCase() + messageContent.slice(1);

    return userFriendlyMessage;
};