export const uploadImage = (selectorFiles: FileList, history) => {
    console.log('This is selected file :-> ', selectorFiles)
    history.push('/ticket-details')
    return({
        type: 'UPLOAD_IMAGE',
        payload: selectorFiles
    })
};