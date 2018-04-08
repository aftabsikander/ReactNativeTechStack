export const selectedLibraryIdAction = (libraryID) => {
    console.log('selectedLibraryIdAction called');
    return {
        type: 'select_library',
        payLoad: libraryID
    }
};