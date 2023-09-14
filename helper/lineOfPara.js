const getLineCount = (text) => {
    if (!text) {
        return 0;
    }

    return text.split(/\n/).length;
}