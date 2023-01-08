//字符串剪切
export const splitUrl = (url: string): string => {
    const urlList = url.split('/');
    return urlList[urlList.length - 1];
};
