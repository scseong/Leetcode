function mergeAlternately(word1: string, word2: string): string {
    let result = '';
    const maxLength = word1.length > word2.length ? word1.length : word2.length;

    for (let i = 0; i < maxLength; i++){
        result += word1[i] ?? ''
        result += word2[i] ?? ''
    }
    
    return result;
};