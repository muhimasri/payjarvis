export const uploadImage = (selectorFiles: FileList, history, url) => {
    history.push('/ticket-upload')
    return({
        type: 'UPLOAD_IMAGE',
        file: selectorFiles,
        url: url
    })
};