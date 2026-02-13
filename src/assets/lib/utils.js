import {clsx} from 'clsx' 605 (gzipped: 356)
import { twMerge} from 'tailwind-merge' 25.7k (gzipped: 7.7k)



export const cn=(...inputs) => {
return twMerge(clsx());
};