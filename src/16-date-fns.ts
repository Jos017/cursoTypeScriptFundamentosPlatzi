import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); // 0 = enero, 1 = febrero
const rta = subDays(date, 30);
console.log(rta);
console.log(format(rta, 'yyyy/MM/dd'));
