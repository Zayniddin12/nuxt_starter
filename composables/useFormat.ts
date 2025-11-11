export function useFormat() {
  const toLocaleDateString = (date: any) => {
    date = new Date(date);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();

    const formatted = `${year}-${month}-${day}`;
    return formatted;
  }


  function recursiveCheckObj(parentKey: string, value: any, formData: any) {
    if (typeof value == 'object') {
      if (Array.isArray(value)) {
        value.forEach((child, index) => {
          recursiveCheckObj(`${parentKey}[${index}]`, child, formData);
        });
      } else {
        Object.keys(value || {}).forEach(key => {
          recursiveCheckObj(parentKey + `[${key}]`, value[key], formData);
        })
      }
    } else {
      formData.append(parentKey, value);
    }
  }


  function finder(data:any, id:number, key: number) {
    return data?.find((item:any) => item[key || 'id'] == id);

  }

  return {
    toLocaleDateString,
    recursiveCheckObj,
    finder,
  }
}