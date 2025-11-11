// utils.ts

export type SortType = 'asc' | 'desc';

export function orderBy<T extends Record<string, any>>(data: T[], field: keyof T, type: SortType = 'asc', byLength = false): T[] {
  if (data && data.length) {
    data.sort((a, b) => {
      if (!byLength) {
        if (a[field] > b[field]) return type === 'asc' ? 1 : -1;
        if (a[field] < b[field]) return type === 'asc' ? -1 : 1;
      } else {
        const lenA = String(a[field]).length;
        const lenB = String(b[field]).length;
        if (lenA > lenB) return type === 'asc' ? 1 : -1;
        if (lenA < lenB) return type === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }
  return data;
}

export function getSalaryByCoefficientAndRate(coefficient: number, rate: number): number | '' {
  if (coefficient && rate) {
    const salary = coefficient * Number(process.env.VUE_APP_MROT) * rate;
    return Math.round(salary * 100) / 100;
  }
  return '';
}

export function clearEmptyParams<T extends Record<string, any>>(object: T): T {
  Object.keys(object).forEach(key => {
    if (object[key] === undefined || object[key] === null || object[key] === '') {
      delete object[key];
    }
  });
  return object;
}

export function generatePagination(currentPage: number, totalPages: number): number[] {
  if (totalPages > 1) {
    let offset = 4;
    let from = currentPage - offset;
    if (from < 1) from = 2;

    let to = from + offset * 2;
    if (to >= totalPages) {
      const diff = to - totalPages;
      to = totalPages;
      from = from - diff;
      if (from < 1) from = 2;
    }

    const pagesArray = [1];
    for (let page = from; page < to; page++) {
      pagesArray.push(page);
    }
    pagesArray.push(totalPages);
    return pagesArray;
  }
  return [];
}

export function getTotal<T extends Record<string, any>>(data: T[], field: keyof T): number {
  let total = 0;
  if (data && data.length && isset(data[0][field])) {
    data.forEach(item => {
      total += Number(item[field]);
    });
  }
  return total;
}

export function firstCharUppercase(string: string): string {
  if (typeof string === 'string' && string.length > 1) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
}

export function cloneObject<T>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}

export function getPercentage(totalCount: number, count: number): number {
  if (isNaN(totalCount) || isNaN(count) || !count || !totalCount) return 0;
  const result = (count / totalCount) * 100;
  return Math.round(result * 100) / 100;
}

export function isset(variable: any): boolean {
  return typeof variable !== 'undefined' && variable !== null;
}

export function getNumber(string: string | number): string {
  return String(string).replace(/[^0-9]/g, '');
}

export function monthToYears(monthCount: number): { year: number; month: number } | null {
  if (monthCount) {
    let years = Math.floor(monthCount / 12);
    let months = monthCount - years * 12;
    return { year: years, month: months };
  }
  return null;
}
