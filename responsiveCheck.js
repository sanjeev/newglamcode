export const responsiveReturn = (desktop, mobile, widthCheck) => {
    if (typeof window !== 'undefined') {
        return window.innerWidth > widthCheck ? desktop : mobile;
    }
}