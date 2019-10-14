export const uploadImage = (selectorFiles: FileList, history, url) => {
    //history.push('/ticket-upload')
    history.push('/confirm-details')
    return({
        type: 'UPLOAD_IMAGE',
        file: selectorFiles,
        url: url
    })
};