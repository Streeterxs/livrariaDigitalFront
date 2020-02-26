export const enumToObjArrayWithNumbers = (enumToTransform: any, keyName: string, valueKey: string) => {
    return Object.keys(enumToTransform)
    .filter(key => {
        return !!+key || +key === 0
    })
    .map(key => ({[keyName]: enumToTransform[key], [valueKey]: +key}));
}